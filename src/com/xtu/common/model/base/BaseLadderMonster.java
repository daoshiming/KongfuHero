package com.xtu.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseLadderMonster<M extends BaseLadderMonster<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}

	public java.lang.Integer getId() {
		return get("id");
	}

	public void setFloor(java.lang.Integer floor) {
		set("floor", floor);
	}

	public java.lang.Integer getFloor() {
		return get("floor");
	}

	public void setMonsterid(java.lang.Integer monsterid) {
		set("monsterid", monsterid);
	}

	public java.lang.Integer getMonsterid() {
		return get("monsterid");
	}

	public void setDescribe(java.lang.String describe) {
		set("describe", describe);
	}

	public java.lang.String getDescribe() {
		return get("describe");
	}

}