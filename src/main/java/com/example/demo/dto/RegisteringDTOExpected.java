package com.example.demo.dto;

public class RegisteringDTOExpected {
	private String heyUserName;
	private String heyUserPassword;
	private String heyUserConfirmPassword = null;
	
	
	public String getHeyUserConfirmPassword() {
		return heyUserConfirmPassword;
	}
	public void setHeyUserConfirmPassword(String heyUserConfirmPassword) {
		this.heyUserConfirmPassword = heyUserConfirmPassword;
	}
	public String getHeyUserName() {
		return heyUserName;
	}
	public void setHeyUserName(String heyUserName) {
		this.heyUserName = heyUserName;
	}
	public String getHeyUserPassword() {
		return heyUserPassword;
	}
	public void setHeyUserPassword(String heyUserPassword) {
		this.heyUserPassword = heyUserPassword;
	}

	
	
}
