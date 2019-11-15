package com.example.demo.service;

public interface HeyUSecurityService {
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}
