package com.xtu.common.controller;

import java.util.List;

import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.jfinal.template.stat.ast.Else;
import com.xtu.common.model.Equipment;
import com.xtu.common.model.Person;
import com.xtu.common.model.Task;
import com.xtu.common.service.FieldService;
import com.xtu.common.service.TaskService;

//任务系统控制器
public class TaskController extends Controller{
	//任务系统主控制器
	public void index() {
		Person person=getSessionAttr("person");
		List<Task> taskList=TaskService.getTaskList(person);
		List<Equipment> taskEquipmentList=TaskService.getEquipmentList();
		List<Task> acceptedTaskList=TaskService.getAcceptedTask(person, taskList);
		List<Task> finishedTaskList=TaskService.getFinishedTask(person, taskList);
		List<Task> unacceptedTaskList=TaskService.getUnacceptedTask(taskList,acceptedTaskList,finishedTaskList);
		setSessionAttr("taskList", taskList);
		if(getSessionAttr("monsterList")==null){
			setSessionAttr("monsterList", FieldService.getAllMonster());
		}
		if(getPara("list").equals("task")){
			renderJson(taskList);
		}else if(getPara("list").equals("accepted")){
			renderJson(acceptedTaskList);
		}else if(getPara("list").equals("finished")){
			renderJson(finishedTaskList);
		}else if(getPara("list").equals("taskEquipmentList")){
			renderJson(taskEquipmentList);
		}else if(getPara("list").equals("unaccepted")){
			renderJson(unacceptedTaskList);
		}
	}
	
	@ActionKey("acceptTask")
	public void acceptTask(){
		int taskId=getParaToInt("taskId");
		List<Task> taskList=getSessionAttr("taskList");
		Person person=getSessionAttr("person");
		for(Task task:taskList){
			if(task.getId()==taskId){
				TaskService.addNewTask(task, person);
				break;
			}
		}
		renderText("成功接受任务");
	}
}
