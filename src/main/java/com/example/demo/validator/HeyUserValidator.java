//package com.example.demo.validator;
//
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import org.springframework.validation.Validator;
//import org.springframework.validation.Errors;
//import org.springframework.validation.ValidationUtils;
//import com.example.demo.model.HeyUser;
//import com.example.demo.service.HeyUserService;
//
//@Component
//public class HeyUserValidator implements Validator {
//	@Autowired
//    private HeyUserService huServ;
//
//    @Override
//    public boolean supports(Class<?> aClass) {
//        return HeyUser.class.equals(aClass);
//    }
//
//    @Override
//    public void validate(Object o, Errors errors) {
//        HeyUser user = (HeyUser) o;
//
//        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "NotEmpty");
//        if (user.getHeyUserName().length() < 6 || user.getHeyUserName().length() > 32) {
//            errors.rejectValue("username", "Size.userForm.username");
//        }
//        if (huServ.findByHeyUserName(user.getHeyUserName()) != null) {
//            errors.rejectValue("username", "Duplicate.userForm.username");
//        }
//
//        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "NotEmpty");
//        if (user.getHeyUserPassword().length() < 6 || user.getHeyUserPassword().length() > 32) {
//            errors.rejectValue("password", "Size.userForm.password");
//        }
//
//        if (!user.getHeyUPasswordConfirm().equals(user.getHeyUserPassword())) {
//            errors.rejectValue("passwordConfirm", "Diff.userForm.passwordConfirm");
//        }
//    }
//}
