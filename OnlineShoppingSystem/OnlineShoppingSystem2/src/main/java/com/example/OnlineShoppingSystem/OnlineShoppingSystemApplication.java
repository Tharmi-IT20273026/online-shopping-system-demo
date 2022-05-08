package com.example.OnlineShoppingSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.example.OnlineShoppingSystem.controller.SellerController;

@SpringBootApplication
//@ComponentScan(basePackageClasses=SellerController.class)
//@EnableAutoConfiguration

public class OnlineShoppingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineShoppingSystemApplication.class, args);
	}

}
