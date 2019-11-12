package com.example.demo.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
@Entity
public class HeyUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long heyUserId;
	private String heyUserName;
	private String heyUserPassword;
	@Transient
    private String heyUPasswordConfirm;
	private String heyUserPic;
	private Double heyUserLatitude;
	private Double heyUserLongitude;
	//private List<Match> heyUserNearU;
	private int heyUserSearchRadius;
	
	public String getHeyUPasswordConfirm() {
		return heyUPasswordConfirm;
	}
	public void setHeyUPasswordConfirm(String heyUPasswordConfirm) {
		this.heyUPasswordConfirm = heyUPasswordConfirm;
	}
	
	public Long getHeyUserId() {
		return heyUserId;
	}
	public void setHeyUserId(Long heyUserId) {
		this.heyUserId = heyUserId;
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
	public Double getHeyUserLatitude() {
		return heyUserLatitude;
	}
	public void setHeyUserLatitude(Double heyUserLatitude) {
		this.heyUserLatitude = heyUserLatitude;
	}
	public Double getHeyUserLongitude() {
		return heyUserLongitude;
	}
	public void setHeyUserLongitude(Double heyUserLongitude) {
		this.heyUserLongitude = heyUserLongitude;
	}
	public int getHeyUserSearchRadius() {
		return heyUserSearchRadius;
	}
	public void setHeyUserSearchRadius(int heyUserSearchRadius) {
		this.heyUserSearchRadius = heyUserSearchRadius;
	}
}
