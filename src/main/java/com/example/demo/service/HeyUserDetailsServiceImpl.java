//package com.example.demo.service;
//
//import java.util.HashSet;
//import java.util.Set;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.example.demo.model.HeyUser;
//import com.example.demo.model.Role;
//import com.example.demo.repository.HeyUserRepository;
//
//@Service
//public class HeyUserDetailsServiceImpl implements UserDetailsService {
//
//
//	@Autowired
//	HeyUserRepository huRep;
//		
//	
//	@Override
//	@Transactional(readOnly = true)
//    public UserDetails loadUserByUsername(String username) {
//       HeyUser user = huRep.findByHeyUserName(username);
//        if (user == null) throw new UsernameNotFoundException(username);
//
//        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
//        for (Role role : user.getRoles()){
//            grantedAuthorities.add(new SimpleGrantedAuthority(role.getRoleName()));
//        }
//
//        return new org.springframework.security.core.userdetails.User(user.getHeyUserName(), user.getHeyUserPassword(), grantedAuthorities);
//
//	}
//	
//	
//	
//
//}
