package com.xtu.common.controller;

import java.util.List;

import javax.xml.ws.Action;

import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.xtu.common.model.Account;
import com.xtu.common.model.Equipment;
import com.xtu.common.model.Person;
import com.xtu.common.service.EquipmentService;

//装备系统控制器
public class EquipmentController extends Controller{
	//装备页面控制器
	public void index() {
		Person person=getSessionAttr("person");
		int id=person.getId();
		//haveEquipments代表用户已有装备列表
		setSessionAttr("haveEquipments", EquipmentService.getPersonEquipments(id));
		List<Equipment> haveEquipments=getSessionAttr("haveEquipments");
		renderJson(haveEquipments);
	}
	//装备穿着控制器
	@ActionKey("equipmentWear")
	public void equipmentWear(){
		int id=getParaToInt("equipmentId");
		Person person=getSessionAttr("person");
		List<Equipment> haveEquipments=getSessionAttr("haveEquipments");
		EquipmentService.wearEquipment(person, id, haveEquipments);
		renderText("装备成功");
//		renderHtml("<script>alert('装备成功');location.href='equipment.jsp';</script>");
	}
	//角色控制器
	@ActionKey("personInformation")
	public void personInformation(){
		Person person=getSessionAttr("person");
		renderJson(person);
	}
	//账户控制器
	@ActionKey("accountInformation")
	public void accountInformation(){
		Account account=getSessionAttr("account");
		renderJson(account);
	}
}
