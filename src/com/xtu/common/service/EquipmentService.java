package com.xtu.common.service;

import java.util.ArrayList;
import java.util.List;

import com.xtu.common.model.Equipment;
import com.xtu.common.model.Person;
import com.xtu.common.model.PersonEquipment;

public class EquipmentService {
	//获取用户拥有的装备
	public static List<Equipment> getPersonEquipments(int id) {
		List<PersonEquipment> personEquipments=PersonEquipment.dao.find("select * from person_equipment where id=?",id);
		List<Equipment> haveEquipments=new ArrayList<Equipment>();
		for(PersonEquipment personEquipment:personEquipments){
			int equipmentId=personEquipment.getEquipmentid();
			haveEquipments.add(Equipment.dao.findById(equipmentId));
		}
		return haveEquipments;
	}
	//穿着装备
	public static void wearEquipment(Person person,int id,List<Equipment> equipments) {
		Equipment newEquipment=null;
		for(Equipment equipment:equipments){
			if(equipment.getId()==id){
				newEquipment=equipment;
				break;
			}
		}
		if(!newEquipment.getType()){
			//装备武器
			int attack=person.getAttack();
			int speed=person.getSpeed();
			if(person.getWeapon()!=-1){
				//如果身上已有武器
				int weapon=person.getWeapon();
				for(Equipment equipment:equipments){
					if(equipment.getId()==weapon){
						//减去原有武器攻击力加成
						attack-=equipment.getAttack();
						//减去原有武器速度加成
						speed-=equipment.getSpeed();
						break;
					}
				}
			}
			attack+=newEquipment.getAttack();
			speed+=newEquipment.getSpeed();
			person.set("weapon", id).set("attack", attack).set("speed", speed).update();
		}
		else if(newEquipment.getType()){
			//装备防具
			int defense=person.getDefense();
			if(person.getArmor()!=-1){
				//如果身上已有防具
				int armor=person.getArmor();
				for(Equipment equipment:equipments){
					if(equipment.getId()==armor){
						//减去原有防具防御加成
						defense-=equipment.getDefense();
						break;
					}
				}
			}
			defense+=newEquipment.getDefense();
			person.set("armor", id).set("defense", defense).update();
		}
			
	}
}
