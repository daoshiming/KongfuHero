package com.xtu.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BasePersonTask<M extends BasePersonTask<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}

	public java.lang.Integer getId() {
		return get("id");
	}

	public void setTaskid(java.lang.Integer taskid) {
		set("taskid", taskid);
	}

	public java.lang.Integer getTaskid() {
		return get("taskid");
	}

	public void setStatus(java.lang.Integer status) {
		set("status", status);
	}

	public java.lang.Integer getStatus() {
		return get("status");
	}

	public void setKilled(java.lang.Integer killed) {
		set("killed", killed);
	}

	public java.lang.Integer getKilled() {
		return get("killed");
	}

}
