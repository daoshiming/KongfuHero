package com.xtu.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseArena<M extends BaseArena<M>> extends Model<M> implements IBean {

	public void setRank(java.lang.Integer rank) {
		set("rank", rank);
	}

	public java.lang.Integer getRank() {
		return get("rank");
	}

	public void setId(java.lang.Integer id) {
		set("id", id);
	}

	public java.lang.Integer getId() {
		return get("id");
	}

}
