package com.xtu.common.service;

import com.xtu.common.model.Account;
import com.xtu.common.model.Person;

public class LoginService{
	//登录检查
	public static Account loginCheck(String username,String password) {
		Account account=Account.dao.findFirst("select * from account where username=? and password=?",username,password);
		if(account!=null){
			return account;
		}else{
			return null;
		}
	}
	//根据用户ID获取角色信息
	public static Person getPerson(String id) {
		return Person.dao.findFirst("select * from person where id=?",id);
	}
	//找回密码
	public static String findPassword(String username,String question,String answer) {
		Account account=Account.dao.findFirst("select * from account where username=? and question=? and answer=?",username,question,answer);
		if(account!=null){
			return "该账户密码为:"+account.getPassword();
		}else{
			return "账户名或密保错误";
		}
	}
}
