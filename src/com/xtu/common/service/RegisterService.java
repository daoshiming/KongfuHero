package com.xtu.common.service;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.xtu.common.model.Account;
import com.xtu.common.model.Arena;
import com.xtu.common.model.Person;

public class RegisterService {
	//注册
	public static boolean register(String username,String password,String question,String answer,String name) {
		Account account=Account.dao.findFirst("select * from account where username=? and password=?",username,password);
		if(account!=null||username.equals("")||password.equals("")){
			return false;
		}else{
			new Account().set("username", username).set("password", password).set("question", question).set("answer", answer).save();
			//新注册账号的ID
			int id=Account.dao.findFirst("select * from account where username=?",username).getInt("id");
			long lastRank=Db.queryLong("select count(*) from arena")+1;
			new Person().set("id", id).set("arenarank", lastRank).set("name", name).set("money", 666).save();
			new Arena().set("id", id).set("rank", lastRank).save();
			return true;
		}
	}
}
