package com.xtu.common.service;

import java.util.ArrayList;
import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.xtu.common.model.Equipment;
import com.xtu.common.model.Person;
import com.xtu.common.model.PersonTask;
import com.xtu.common.model.Task;

//任务系统服务类
public class TaskService {
	//获得任务列表（仅获取可接、已完成任务）
	public static List<Task> getTaskList(Person person) {
		return Task.dao.find("select * from task where minimumrank<=?",person.getRank());
	}
	//获取任务奖励装备列表（假设商店中存在的装备不作为任务奖励装备）
	public static List<Equipment> getEquipmentList() {
		return Equipment.dao.find("select * from equipment where inshop=0");
	}
	//领取新任务
	public static void addNewTask(Task task,Person person) {
		new PersonTask().set("id", person.getId()).set("taskid", task.getId()).set("status", 1).save();
	}
	//获得未接受的任务
	public static List<Task> getUnacceptedTask(List<Task> allTaskList,List<Task> acceptedTaskList,List<Task> finishedTaskList){
		List<Task> unaccptedTaskList=new ArrayList<>();
		for(Task allTask:allTaskList){
			boolean accepted=false;
			for(Task acceptedTask:acceptedTaskList) {
				if (acceptedTask.getId() .equals(allTask.getId()) ) {
					accepted = true;
					break;
				}
			}
			boolean finished=false;
			for(Task finishedTask:finishedTaskList){
				if(finishedTask.getId().equals(allTask.getId())){
					finished=true;
					break;
				}
			}
			if(!finished&&!accepted){
				unaccptedTaskList.add(allTask);
			}
		}
		return unaccptedTaskList;
	}
	//获得已接受但未完成的任务
	public static List<Task> getAcceptedTask(Person person,List<Task> allTaskList) {
		List<PersonTask> personTasks=PersonTask.dao.find("select * from person_task where id=? and status=1",person.getId());
		List<Task> acceptedTaskList=new ArrayList<Task>();
		for(PersonTask personTask:personTasks){
			for(Task task:allTaskList){
				if(task.getId()==personTask.getTaskid()){
					acceptedTaskList.add(task);
				}
			}
		}
		return acceptedTaskList;
	}
	//获得已完成的任务
	public static List<Task> getFinishedTask(Person person,List<Task> allTaskList) {
		List<PersonTask> personTasks=PersonTask.dao.find("select * from person_task where id=? and status=2",person.getId());
		List<Task> finishedTaskList=new ArrayList<Task>();
		for(PersonTask personTask:personTasks){
			for(Task task:allTaskList){
				if(task.getId()==personTask.getTaskid()){
					finishedTaskList.add(task);
				}
			}
		}
		return finishedTaskList;
	}
	//击杀怪物后,更新任务信息
	public static void updateTaskStatus(int monsterId,List<Task> acceptedTask,List<Task> finishedTask,Person person) {
		for(Task task:acceptedTask){
			if(task.getMonsterid()==monsterId){
				PersonTask personTask=PersonTask.dao.findFirst("select * from person_task where id=? and taskid=?",person.getId(),task.getId());
				int killedMonster=personTask.getInt("killed");
				personTask.set("killed", killedMonster+1);
				//如果击杀的怪物数达到任务要求，则变更任务状态为已完成
				if(task.getMonsteramount()==(killedMonster+1)){
					personTask.set("status", 2);
					//将已完成任务从已接受任务列表中删除，并添加到已完成任务列表
					acceptedTask.remove(task);
					finishedTask.add(task);
					//获得任务奖励
					person.set("experience", task.getExperience())
						.set("money", task.getMoney())
						.update();
					if(task.getEquipment()>0){
						//获得装备奖励
						new PersonTask().set("id", person.getId())
								.set("equipmentid", task.getEquipment())
								.save();
					}
					//升级处理
					UpdateService.updateRank(person);
				}
				personTask.update();
				break;
			}
		}
	}
}
