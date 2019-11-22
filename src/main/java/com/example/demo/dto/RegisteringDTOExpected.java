package com.example.demo.dto;

public class RegisteringDTOExpected {
	private String heyUserName;
	private String heyUserPassword;
	private String heyUserConfirmPassword = null;
	private String heyUserPic/*= URL DE BASE*/;
	
	
	
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
	public String getHeyUserPic() {
		return heyUserPic;
	}
	public void setHeyUserPic(String heyUserPic) {
		this.heyUserPic = heyUserPic;
	}
	
	
}
