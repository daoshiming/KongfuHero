package com.xtu.common.controller;

import java.util.ArrayList;
import java.util.List;

import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.xtu.common.model.Ladder;
import com.xtu.common.model.Monster;
import com.xtu.common.model.Person;
import com.xtu.common.service.FightService;
import com.xtu.common.service.LadderService;

//副本控制器
public class LadderController extends Controller{
	//副本主控制器
	public void index() {
		setSessionAttr("ladderList", LadderService.getLadderList());
		List<Ladder> ladderList=getSessionAttr("ladderList");
		renderJson(ladderList);
	}
	@ActionKey("enterLadder")
	public void enterLadder(){
		int ladderId=getParaToInt("ladderId");
		List<Ladder> ladderList=getSessionAttr("ladderList");
		Ladder targetLadder=null;
		for(Ladder ladder:ladderList){
			if(ladder.getId()==ladderId){
				targetLadder=ladder;
				break;
			}
		}
		setSessionAttr("floorMonsterList", LadderService.getFloorMonster(targetLadder.getId()));
		setSessionAttr("nowLadder", targetLadder);
		setSessionAttr("nowFloor", 1);
		List<Monster> floorMonsterList=getSessionAttr("floorMonsterList");
		renderJson(floorMonsterList);
	}
	@ActionKey("floorFight")
	public void floorFight(){
		List<String> resultList=new ArrayList<String>();
		List<Monster> floorMonsterList=getSessionAttr("floorMonsterList");
		Person person=getSessionAttr("person");
		Ladder nowLadder=getSessionAttr("nowLadder");
		Monster monster=floorMonsterList.get((Integer)getSessionAttr("nowFloor")-1);
		if(FightService.fight(person, monster, resultList)){
			System.out.println("挑战成功");
			setSessionAttr("nowFloor", (Integer)getSessionAttr("nowFloor")+1);
			if((Integer)getSessionAttr("nowFloor")==(nowLadder.getMaxfloor()+1)){
				setSessionAttr("floorResult", -1);
				if(LadderService.ladderReward(nowLadder, person)){
					renderText("恭喜你通关并获得装备");
//					renderHtml("<script>alert('恭喜你通关并获得装备!');location.href='town.jsp';</script>");
				}else{
					renderText("恭喜你通关，但很可惜未获得装备");
//					renderHtml("<script>alert('恭喜你通关，但很可惜未获得装备!');location.href='town.jsp';</script>");
				}
			}else{
				setSessionAttr("floorResult", 1);
				renderJson(resultList);
//				renderJsp("/fightResult.jsp");
			}
		}else{
			setSessionAttr("floorResult", 0);
			renderJson(resultList);
//			renderJsp("/fightResult.jsp");
		}
	}
	@ActionKey("floorNum")
	public void floorNum(){
		System.out.println("floor:"+(Integer)getSessionAttr("nowFloor"));
		renderText(String.valueOf((Integer)getSessionAttr("nowFloor")));
	}
}
