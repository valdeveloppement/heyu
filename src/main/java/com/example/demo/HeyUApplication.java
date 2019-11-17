package com.example.demo;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

import com.example.demo.repository.HeyUserRepository;
import com.example.demo.service.HeyUService;


@SpringBootApplication
public class HeyUApplication /*extends SpringBootServletInitializer*/ {
	
	   
//	    @Autowired
//	    private HeyUserRepository hUserRep;
//	    @Autowired
//	    private HeyUService myService;
//	    
//	    @PostConstruct
//	    public void createListUsers() {
//	    	System.out.println(" @PostConstruct s'exectute dans le main");
//	    	myService.getListUsers().addAll(hUserRep.findAll());  
//	    }


	/*@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(HeyUApplication.class);
    }*/

	public static void main(String[] args) {
		SpringApplication.run(HeyUApplication.class, args);
		

	

		
	}

}
