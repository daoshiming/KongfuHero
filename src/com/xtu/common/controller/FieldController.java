package com.xtu.common.controller;

import java.util.ArrayList;
import java.util.List;

import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.xtu.common.model.Monster;
import com.xtu.common.model.Person;
import com.xtu.common.model.Task;
import com.xtu.common.service.ArenaService;
import com.xtu.common.service.FieldService;
import com.xtu.common.service.FightService;
import com.xtu.common.service.TaskService;

//野外控制器
public class FieldController extends Controller{
	public void index() {
		List<Monster> monsters=FieldService.getAllMonster();
		setSessionAttr("monsterList", monsters);
		renderJson(monsters);
//		render("/field.jsp");
	}
	@ActionKey("fieldFight")
	public void fieldFight(){
		int monsterId=getParaToInt("monsterId");
		List<Monster> monsters=getSessionAttr("monsterList");
		//战斗结果列表，记录战斗过程
		List<String> resultList=new ArrayList<String>();
		List<Task> acceptedTask=getSessionAttr("acceptedTaskList");
		List<Task> finishedTask=getSessionAttr("finishedTaskList");
		Person person=getSessionAttr("person");
		if(acceptedTask==null){
			List<Task> allTaskList=TaskService.getTaskList(person);
			acceptedTask=TaskService.getAcceptedTask(person,allTaskList);
		}
		if(finishedTask==null){
			List<Task> allTaskList=TaskService.getTaskList(person);
			finishedTask=TaskService.getFinishedTask(person,allTaskList);
		}
		for(Monster monster:monsters){
			if(monster.getId()==monsterId){
				//如果攻击野怪胜利，则尝试更新任务状态
				if(FightService.fight(getSessionAttr("person"), monster,resultList)){
					TaskService.updateTaskStatus(monsterId, acceptedTask, finishedTask, person);
				}
				break;
			}
		}
		setSessionAttr("resultList", resultList);
		renderJson(resultList);
//		renderJsp("/fightResult.jsp");
	}
}
