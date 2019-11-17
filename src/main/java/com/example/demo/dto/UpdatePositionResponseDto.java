package com.example.demo.dto;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.HeyUser;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class UpdatePositionResponseDto {

	@JsonIgnoreProperties("heyUserNearU")
	private ArrayList<HeyUser> heyUserNearU = new ArrayList<HeyUser>();

	public List<HeyUser> getHeyUserNearU() {
		return heyUserNearU;
	}

	public void setHeyUserNearU(ArrayList<HeyUser> heyUserNearU) {
		this.heyUserNearU = heyUserNearU;
	}
	
}
