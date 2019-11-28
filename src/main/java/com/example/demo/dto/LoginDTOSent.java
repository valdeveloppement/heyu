package com.example.demo.dto;

import com.example.demo.model.HeyUser;

public class LoginDTOSent {

	
	HeyUser userConnected = new HeyUser();

	String messageSent = null;
	private boolean connected;

	public HeyUser getUserconnected() {
		return userConnected;
	}
	public void setUserconnected(HeyUser userConnected) {
		this.userConnected = userConnected;
	}
	public String getMessageSent() {
		return messageSent;
	}
	public void setMessageSent(String messageSent) {
		this.messageSent = messageSent;
	}
	public boolean isConnected() {
		return connected;
	}
	public void setConnected(boolean isConnected) {
		this.connected = isConnected;
	}
}
