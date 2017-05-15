package com.xtu.common.controller;

import java.util.List;

import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.xtu.common.model.Equipment;
import com.xtu.common.model.Person;
import com.xtu.common.service.ShopService;

//商店系统控制器
public class ShopController extends Controller{
	//武器商店控制器
	@ActionKey("/weaponShop")
	public void weaponShop() {
		if(getSessionAttr("weaponShop")==null){
			setSessionAttr("weaponShop",ShopService.getWeapon());
		}
		List weaponList=(List)getSessionAttr("weaponShop");
		renderJson(weaponList);
	}
	//防具商店控制器
	@ActionKey("/armorShop")
	public void armorShop() {
		if(getSessionAttr("armorShop")==null){
			setSessionAttr("armorShop",ShopService.getArmor());
		}
		List<Equipment> armorList=getSessionAttr("armorShop");
		renderJson(armorList);
	}
	//购买控制器
	@ActionKey("buyEquipment")
	public void buyEquipment(){
		int id=Integer.parseInt(getPara("equipmentId"));
		Equipment equipment=Equipment.dao.findById(id);
		//获得角色信息
		Person person=getSessionAttr("person");
		//判断用户资金是否够购买装备
		if(person.getMoney()>=equipment.getPrice()){
			if(ShopService.buyEquipment(person, equipment)){
				renderText("购买成功");
//				renderHtml("<script>alert('购买成功');location.href='town.jsp';</script>");
			}else{
				renderText("购买失败！您已有该装备，请勿重复购买");
//				renderHtml("<script>alert('购买失败！您已有该装备，请勿重复购买！');location.href='town.jsp';</script>");
			}
		}else{
			renderText("购买失败，金币不足");
//			renderHtml("<script>alert('购买失败，金币不足！');location.href='town.jsp';</script>");
		}
	}
}
