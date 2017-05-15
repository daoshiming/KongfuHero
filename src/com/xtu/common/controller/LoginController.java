package com.xtu.common.controller;

import com.jfinal.core.ActionKey;
import com.jfinal.core.Controller;
import com.xtu.common.model.Account;
import com.xtu.common.model.Person;
import com.xtu.common.service.LoginService;
import com.xtu.common.service.RegisterService;

public class LoginController extends Controller{
	//登录模块控制器
	public void index() {
		String username=getPara("username");
		String password=getPara("password");
		Account account=LoginService.loginCheck(username, password);
		if(account!=null){
			Person person=LoginService.getPerson(String.valueOf(account.getInt("id")));
			setSessionAttr("account", account);
			setSessionAttr("person", person);
			renderText("LoginSuccess");
//			renderJsp("/town.jsp");
		}else {
			renderText("LoginFailure");
//			renderHtml("<script>alert('密码错误');location.href='login.jsp';</script>");
		}
	}
	//注册模块控制器
	@ActionKey("/register")
	public void register() {
		getResponse().addHeader("Access-Control-Allow-Origin", "*");
		String username=getPara("username");
		String password=getPara("password");
		String question=getPara("question");
		String answer=getPara("answer");
		String name=getPara("name");
		if(RegisterService.register(username, password, question, answer,name)){
			renderText("RegisterSuccess");
//			renderHtml("<script>alert('注册成功！');location.href='login.jsp';</script>");
		}else{
			renderText("RegisterFailure");
//			renderHtml("<script>alert('注册失败！用户名重复！');location.href='register.jsp';</script>");
		}
	}
	//找回密码控制器
	@ActionKey("findpassword")
	public void findpassword(){
		getResponse().addHeader("Access-Control-Allow-Origin", "*");
		String username=getPara("username");
		String question=getPara("question");
		String answer=getPara("answer");
		String result=LoginService.findPassword(username, question, answer);
		renderText(result);
//		renderHtml("<script>alert('"+result+"');location.href='login.jsp';</script>");
	}
}
