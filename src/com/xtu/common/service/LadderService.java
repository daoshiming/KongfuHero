package com.xtu.common.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.xtu.common.model.Ladder;
import com.xtu.common.model.LadderMonster;
import com.xtu.common.model.Monster;
import com.xtu.common.model.Person;
import com.xtu.common.model.PersonEquipment;

//副本服务类
public class LadderService {
	//获取副本列表
	public static List<Ladder> getLadderList() {
		return Ladder.dao.find("select * from ladder");
	}
	//获取当前副本怪物列表
	public static List<Monster> getFloorMonster(int ladderId) {
		List<LadderMonster> ladderMonsterList=LadderMonster.dao.find("select * from ladder_monster where id=?",ladderId);
		List<Monster> monsterList=new ArrayList<Monster>();
		for(LadderMonster ladderMonster:ladderMonsterList){
			Monster monster=Monster.dao.findById(ladderMonster.getMonsterid());
			monsterList.add(monster);
		}
		return monsterList;
	}
	//获得副本通关奖励
	public static boolean ladderReward(Ladder ladder,Person person) {
		person.set("money", person.getMoney()+ladder.getMoney())
			.set("experience", person.getExperience()+ladder.getExperience())
			.update();
		//升级处理
		UpdateService.updateRank(person);
		if(ladder.getEquipment()!=0){
			/*
			 * 掉落装备说明：
			 * 20%几率掉落装备，若掉落装备则返回true，否则返回false
			 */
			int equipmentRandom=new Random().nextInt(100)+1;
			if(equipmentRandom<=20){
				new PersonEquipment().set("id", person.getId()).set("equipmentid", ladder.getEquipment()).save();
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
}
