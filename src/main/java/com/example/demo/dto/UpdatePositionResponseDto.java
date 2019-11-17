package com.example.demo.dto;

import java.util.List;

import com.example.demo.model.HeyUser;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class UpdatePositionResponseDto {

	@JsonIgnoreProperties("heyUserNearU")
	private List<HeyUser> heyUserNearU;

	public List<HeyUser> getHeyUserNearU() {
		return heyUserNearU;
	}

	public void setHeyUserNearU(List<HeyUser> heyUserNearU) {
		this.heyUserNearU = heyUserNearU;
	}
	
}
