package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.example.demo.model.HeyUser;
import com.example.demo.service.HeyUSecurityService;
import com.example.demo.service.HeyUserService;
import com.example.demo.validator.HeyUserValidator;

@Controller
public class HeyUserController {

	@Autowired
	HeyUserService huServ;
	
	@Autowired
	HeyUSecurityService securityService;
	
	@Autowired
	HeyUserValidator huValidator;
	
	@GetMapping("/registration")
	public String registration(@ModelAttribute("userForm") HeyUser userForm, BindingResult bindingResult) {
        huValidator.validate(userForm, bindingResult);

        if (bindingResult.hasErrors()) {
            return "registration";
        }

        huServ.save(userForm);

        securityService.autoLogin(userForm.getHeyUserName(), userForm.getHeyUPasswordConfirm());

        return "redirect:/welcome";
    }

    @GetMapping("/login")
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }

    @GetMapping({"/", "/welcome"})
    public String welcome(Model model) {
        return "welcome";
    }
}
