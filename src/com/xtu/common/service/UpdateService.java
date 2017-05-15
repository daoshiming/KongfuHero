package com.xtu.common.service;

import com.xtu.common.model.Person;

//信息更新服务
public class UpdateService {
	//升级处理
	public static void updateRank(Person person) {
		int oldRank=person.getRank();
		int experience=person.getExperience();
		int newRank=experience/100;
		/*
		 * 升级说明：
		 * 每100经验升1级
		 * 每升1级提高攻击力5点，防御力5点
		 * 每升5级提高速度1点
		 */
		if(newRank>oldRank){
			int upRank=newRank-oldRank;
			int upAttack=upRank*5;
			int upDefense=upRank*5;
			int upSpeed=newRank/5-oldRank/5;
			person.set("rank", person.getRank()+upRank)
				.set("attack",person.getAttack()+upAttack)
				.set("defense", person.getDefense()+upDefense)
				.set("speed", person.getSpeed()+upSpeed).update();
		}
	}
}
