package com.example.OnlineShoppingSystem.service;

import com.example.OnlineShoppingSystem.dto.LoginResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.OnlineShoppingSystem.models.Login;
import com.example.OnlineShoppingSystem.repository.LoginRepository;

@Service
@Transactional
public class LoginService {

	 @Autowired
	 private LoginRepository loginRepository;
	 
	 public LoginResponseDTO loginUser(Login login) {
	       Login dbUser = loginRepository.findByUsername(login.getUsername());
	       LoginResponseDTO responseDTO = new LoginResponseDTO();
	       if(dbUser==null){
	       		responseDTO.setLoginStatus("Failure");
	       		responseDTO.setMessage("User is not registered to the system");
	       		responseDTO.setCode(400);
		   }else {
			   if (login.getPassword().equals(dbUser.getPassword())) {
				   responseDTO.setLoginStatus("Success");
				   responseDTO.setMessage("User is successfully logged");
				   responseDTO.setCode(200);
			   } else {
				   responseDTO.setLoginStatus("Failure");
				   responseDTO.setMessage("Invalid credentials");
				   responseDTO.setCode(401);
			   }
		   }
	       return responseDTO;
	    }
}
