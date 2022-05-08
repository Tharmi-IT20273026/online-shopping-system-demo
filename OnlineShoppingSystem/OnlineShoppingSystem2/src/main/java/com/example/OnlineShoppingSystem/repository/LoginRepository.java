package com.example.OnlineShoppingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.OnlineShoppingSystem.models.Login;

public interface LoginRepository extends JpaRepository<Login, String>{
	public Login findByUsername(String username);
}
