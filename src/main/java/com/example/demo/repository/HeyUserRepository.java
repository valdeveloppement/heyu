package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.HeyUser;

public interface HeyUserRepository extends JpaRepository<HeyUser, Long> {

	
	HeyUser findByHeyUserName(String heyUserName);
	
}
