package com.xtu.common.service;

import java.util.List;

import com.xtu.common.model.Arena;
import com.xtu.common.model.Person;

//竞技场服务类
public class ArenaService {
	//获得可挑战的对手
	public static List<Person> getOpponent(Person person) {
		return Person.dao.find("select * from person where arenarank+10>? and arenarank<? ORDER BY arenarank ASC",person.getArenarank(),person.getArenarank());
	}
	//挑战成功，更新竞技场排名
	public static void updateRank(Person person1,Person person2) {
		int rank1=person1.getArenarank();
		int rank2=person2.getArenarank();
		System.out.println("rank1 "+rank1+"  rank2"+rank2);
		person1.set("arenarank", rank2).update();
		person2.set("arenarank", rank1).update();
		Arena.dao.findFirst("select * from arena where rank=?",rank2).set("id", person1.getId()).update();
		Arena.dao.findFirst("select * from arena where rank=?",rank1).set("id", person2.getId()).update();
	}
}
