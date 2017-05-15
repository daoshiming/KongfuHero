package com.xtu.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BasePerson<M extends BasePerson<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}

	public java.lang.Integer getId() {
		return get("id");
	}

	public void setRank(java.lang.Integer rank) {
		set("rank", rank);
	}

	public java.lang.Integer getRank() {
		return get("rank");
	}

	public void setAttack(java.lang.Integer attack) {
		set("attack", attack);
	}

	public java.lang.Integer getAttack() {
		return get("attack");
	}

	public void setDefense(java.lang.Integer defense) {
		set("defense", defense);
	}

	public java.lang.Integer getDefense() {
		return get("defense");
	}

	public void setWeapon(java.lang.Integer weapon) {
		set("weapon", weapon);
	}

	public java.lang.Integer getWeapon() {
		return get("weapon");
	}

	public void setArmor(java.lang.Integer armor) {
		set("armor", armor);
	}

	public java.lang.Integer getArmor() {
		return get("armor");
	}

	public void setMoney(java.lang.Integer money) {
		set("money", money);
	}

	public java.lang.Integer getMoney() {
		return get("money");
	}

	public void setLife(java.lang.Integer life) {
		set("life", life);
	}

	public java.lang.Integer getLife() {
		return get("life");
	}

	public void setSpeed(java.lang.Integer speed) {
		set("speed", speed);
	}

	public java.lang.Integer getSpeed() {
		return get("speed");
	}

	public void setExperience(java.lang.Integer experience) {
		set("experience", experience);
	}

	public java.lang.Integer getExperience() {
		return get("experience");
	}

	public void setTaskid(java.lang.Integer taskid) {
		set("taskid", taskid);
	}

	public java.lang.Integer getTaskid() {
		return get("taskid");
	}

	public void setArenarank(java.lang.Integer arenarank) {
		set("arenarank", arenarank);
	}

	public java.lang.Integer getArenarank() {
		return get("arenarank");
	}

	public void setName(java.lang.String name) {
		set("name", name);
	}

	public java.lang.String getName() {
		return get("name");
	}

}
