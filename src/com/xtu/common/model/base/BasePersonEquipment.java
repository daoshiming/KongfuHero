package com.xtu.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BasePersonEquipment<M extends BasePersonEquipment<M>> extends Model<M> implements IBean {

	public void setId(java.lang.Integer id) {
		set("id", id);
	}

	public java.lang.Integer getId() {
		return get("id");
	}

	public void setEquipmentid(java.lang.Integer equipmentid) {
		set("equipmentid", equipmentid);
	}

	public java.lang.Integer getEquipmentid() {
		return get("equipmentid");
	}

}
