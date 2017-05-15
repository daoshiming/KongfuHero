package com.xtu.common.service;

import java.util.List;

import com.xtu.common.model.Equipment;
import com.xtu.common.model.Person;
import com.xtu.common.model.PersonEquipment;

public class ShopService {
	//返回武器商店列表
	public static List<Equipment> getWeapon() {
		return Equipment.dao.find("select * from equipment where type=0 and inshop=1");
	}
	//返回防具商店列表
	public static List<Equipment> getArmor() {
		return Equipment.dao.find("select * from equipment where type=1 and inshop=1");
	}
	//购买装备
	public static boolean buyEquipment(Person person,Equipment equipment) {
		if(PersonEquipment.dao.findFirst("select * from person_equipment where id=? and equipmentid=?",person.getId(),equipment.getId()) != null){
			return false;
		}
		person.set("money", person.getMoney()-equipment.getPrice()).update();
		new PersonEquipment().set("id",person.getId() ).set("equipmentid", equipment.getId()).save();
		return true;
	}
}
