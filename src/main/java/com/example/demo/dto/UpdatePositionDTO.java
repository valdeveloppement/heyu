package com.example.demo.dto;

public class UpdatePositionDTO {

	private String heyUserName;
	private String heyUserPassword;
	private double heyUserLatitude;
	private double heyUserLongitude;
	private int heyUserSearchRadius;
	private double heyUserAccuracy;

		
	public double getHeyUserAccuracy() {
		return heyUserAccuracy;
	}
	public void setHeyUserAccuracy(double heyUserAccuracy) {
		this.heyUserAccuracy = heyUserAccuracy;
	}
	public int getHeyUserSearchRadius() {
		return heyUserSearchRadius;
	}
	public void setHeyUserSearchRadius(int heyUserSearchRadius) {
		this.heyUserSearchRadius = heyUserSearchRadius;
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
	
	public double getHeyUserLatitude() {
		return heyUserLatitude;
	}
	public void setHeyUserLatitude(double heyUserLatitude) {
		this.heyUserLatitude = heyUserLatitude;
	}
	public double getHeyUserLongitude() {
		return heyUserLongitude;
	}
	public void setHeyUserLongitude(double heyUserLongitude) {
		this.heyUserLongitude = heyUserLongitude;
	}
	
}
