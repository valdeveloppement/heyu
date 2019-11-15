package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.NewLocationDTO;
import com.example.demo.model.HeyUser;
import com.example.demo.service.HeyUService;

@RestController
public class HeyUController {
	
	@Autowired
	HeyUService hUServ;

	
    @PostMapping("/updateLocation")
    public ArrayList<HeyUser> updateLocation(@RequestBody NewLocationDTO newLocationDto) {
    	
    	
    
    	HeyUser searchedUser = hUServ.searchUserInArrayList( newLocationDto.getHeyUserName(),newLocationDto.getHeyUserPassword(), hUServ.getListUsers());
    	if(searchedUser != null) {
    		hUServ.updateLocation(searchedUser.getHeyUserLongitude(), searchedUser.getHeyUserLatitude(), searchedUser);
    		return hUServ.findNearUser(searchedUser, newLocationDto.getHeyUserSearchRadius(), hUServ.getListUsers());
    	}
		return null;
    }
	
    
    
    
    
    @PostMapping("/registering")
    public ArrayList<HeyUser> register(@RequestBody NewLocationDTO newLocationDto) {
    	
    	
    
    	HeyUser searchedUser = hUServ.searchUserInArrayList( newLocationDto.getHeyUserName(),newLocationDto.getHeyUserPassword(), hUServ.getListUsers());
    	if(searchedUser != null) {
    		hUServ.updateLocation(searchedUser.getHeyUserLongitude(), searchedUser.getHeyUserLatitude(), searchedUser);
    		return hUServ.findNearUser(searchedUser,newLocationDto.getHeyUserSearchRadius(), hUServ.getListUsers());
    	}
		return null;
    }
    
    
    @PostMapping("/ModifyHeyUserSettings")
    
    
    
    
    
	
}


