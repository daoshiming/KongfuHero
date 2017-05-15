package com.xtu.common.service;

import java.util.List;
import java.util.Random;

import com.xtu.common.model.Monster;
import com.xtu.common.model.Person;

//战斗服务类
public class FightService {
	//PVP战斗
	public static boolean fight(Person person1,Person person2,List<String> resultList) {
		Random random=new Random();
		//获取person1的生命值
		int life1=person1.getLife();
		//获取person2的生命值
		int life2=person2.getLife();
		/*
		 * 战斗计算说明:
		 * miss1代表决定person2闪避的随机数,若miss1<speed2，则person2躲避一次攻击
		 * miss2同理
		 * attack攻击力属性决定伤害
		 * defense防御力决定减免伤害的比例（千分制）
		 */
		while(life1>0&&life2>0){
			int miss1=random.nextInt(100)+1;
			int miss2=random.nextInt(100)+1;
			if(miss1>=person2.getSpeed()){
				life2-=(person1.getAttack()*(1000-person2.getDefense())/1000+1);
				resultList.add(person1.getName()+"攻击了"+person2.getName()+"，造成了"+person1.getAttack()*(1000-person2.getDefense())/1000+1+"点伤害");
			}else{
				resultList.add(person2.getName()+"躲避了"+person1.getName()+"的攻击");
			}
			if(miss2>=person1.getSpeed()){
				life1-=(person2.getAttack()*(1000-person1.getDefense())/1000+1);
				resultList.add(person2.getName()+"攻击了"+person1.getName()+"，造成了"+person2.getAttack()*(1000-person1.getDefense())/1000+1+"点伤害");
			}else{
				resultList.add(person1.getName()+"躲避了"+person2.getName()+"的攻击");
			}
		}
		/*
		 * 战斗胜利判定说明：
		 * 由于战斗模式是双方各攻击一回合，因此若在同一回合内，双方血量同时减到0，则判定为挑战方(person1)胜利
		 */
		if(life2<=0){
			//如果战斗胜利，则向resultList中添加一个胜利标记，否则添加一个失败标记
			resultList.add("战斗胜利");
			return true;
		}else{
			resultList.add("战斗失败");
			return false;
		}
	}
	//PVE战斗
	public static boolean fight(Person person,Monster monster,List<String> resultList) {
		Random random=new Random();
		//获取person1的生命值
		int life1=person.getLife();
		//获取person2的生命值
		int life2=monster.getLife();
		/*
		 * 战斗计算说明:
		 * miss1代表决定person2闪避的随机数,若miss1<speed2，则person2躲避一次攻击
		 * miss2同理
		 * attack攻击力属性决定伤害
		 * defense防御力决定减免伤害的比例（千分制）
		 */
		while(life1>0&&life2>0){
			int miss1=random.nextInt(100)+1;
			int miss2=random.nextInt(100)+1;
			//怪物默认速度为5
			if(miss1>=5){
				life2-=(person.getAttack()*(1000-monster.getDefense())/1000+1);
				resultList.add("玩家1攻击了怪物，造成了"+person.getAttack()*(1000-monster.getDefense())/1000+1+"点伤害");
			}else{
				resultList.add("怪物躲避了玩家1的攻击");
			}
			if(miss2>=person.getSpeed()){
				life1-=(monster.getAttack()*(1000-person.getDefense())/1000+1);
				resultList.add("玩家2攻击了玩家1，造成了"+monster.getAttack()*(1000-person.getDefense())/1000+1+"点伤害");
			}else{
				resultList.add("玩家1躲避了玩家2的攻击");
			}
		}
		/*
		 * 战斗胜利判定说明：
		 * 由于战斗模式是双方各攻击一回合，因此若在同一回合内，双方血量同时减到0，则判定为挑战方(person1)胜利
		 */
		if(life2<=0){
			//如果战斗胜利，则向resultList中添加一个胜利标记，否则添加一个失败标记
			resultList.add("战斗胜利");
			return true;
		}else{
			resultList.add("战斗失败");
			return false;
		}
	}
}
