package com.example.OnlineShoppingSystem.controller;

import com.example.OnlineShoppingSystem.dto.LoginResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.OnlineShoppingSystem.models.Login;
import com.example.OnlineShoppingSystem.service.LoginService;

@RestController
public class LoginController {
	 @Autowired
	    LoginService loginService;
	@CrossOrigin(origins = "*")
	 @PostMapping("/login")
	    public LoginResponseDTO add(@RequestBody Login login) {
	         return loginService.loginUser(login);
	    }

}
