//package com.example.demo.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.model.HeyUser;
//import com.example.demo.repository.HeyUserRepository;
//import com.example.demo.repository.RoleRepository;
//
//import java.util.HashSet;
//
//@Service
//public class HeyUserServiceImpl implements HeyUserService {
//
//	@Autowired
//	HeyUserRepository huRep;
//	
//	@Autowired
//	RoleRepository roleRep;
//	
//	@Autowired
//	public BCryptPasswordEncoder bCryptPasswordEncoder;
//	
//    @Override
//    public void save(HeyUser user) {
//        user.setHeyUserPassword(bCryptPasswordEncoder.encode(user.getHeyUserPassword()));
//        user.setRoles(new HashSet<>(roleRep.findAll()));
//        huRep.save(user);
//    }
//    
//
//    @Override
//    public HeyUser findByHeyUserName(String username) {
//        return huRep.findByHeyUserName(username);
//    }
//}
