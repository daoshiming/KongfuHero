package com.xtu.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseMonster<M extends BaseMonster<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}

	public java.lang.Integer getId() {
		return get("id");
	}

	public void setName(java.lang.String name) {
		set("name", name);
	}

	public java.lang.String getName() {
		return get("name");
	}

	public void setDescribe(java.lang.String describe) {
		set("describe", describe);
	}

	public java.lang.String getDescribe() {
		return get("describe");
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

	public void setLife(java.lang.Integer life) {
		set("life", life);
	}

	public java.lang.Integer getLife() {
		return get("life");
	}

	public void setInfield(java.lang.Integer infield) {
		set("infield", infield);
	}

	public java.lang.Integer getInfield() {
		return get("infield");
	}

}
