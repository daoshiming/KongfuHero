package com.xtu.common.service;

import java.util.List;

import com.xtu.common.model.Monster;

public class FieldService {
	public static List<Monster> getAllMonster() {
		return Monster.dao.find("select * from monster where infield=1");
	}
}
