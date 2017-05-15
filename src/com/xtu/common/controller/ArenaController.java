package com.xtu.common.controller;

import java.util.ArrayList;
import java.util.List;

import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.xtu.common.model.Person;
import com.xtu.common.service.ArenaService;
import com.xtu.common.service.FightService;

//竞技场控制器
public class ArenaController extends Controller{
	//竞技场主控制器
	public void index() {
		Person person=getSessionAttr("person");
		setSessionAttr("opponent", ArenaService.getOpponent(person));
		List opponentList=getSessionAttr("opponent");
		renderJson(opponentList);
	}
	//竞技场战斗控制器
	@ActionKey("arenaAttack")
	public void arenaAttack(){
		int opponentId=getParaToInt("opponentId");
		List<Person> opponentList=getSessionAttr("opponent");
		//战斗结果列表，记录战斗过程
		List<String> resultList=new ArrayList<String>();
		for(Person person:opponentList){
			if(person.getId()==opponentId){
				if(FightService.fight(getSessionAttr("person"), person,resultList)){
					ArenaService.updateRank(getSessionAttr("person"), person);
				}
				break;
			}
		}
		setSessionAttr("resultList", resultList);
		renderJson(resultList);
	}
}
