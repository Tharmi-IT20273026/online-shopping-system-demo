package com.example.OnlineShoppingSystem.models;

import lombok.Data;
import lombok.NonNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "login")
@Table(name = "login")
public class Login {
	@Id
	@GeneratedValue
	@NonNull
	@Column(name = "username")
    private String username;

	@NonNull
	@Column(name = "password")
    private String password;
	
	@Column(name = "type")
	@NonNull
    private String type;
	
     public String getUsername() {
	        return username;
	    }
	 public String getPassword() {
	        return password;
	    }
	 public String getType() {
	        return type;
	    }
	  public void setUsername(String username) {
	        this.username = username;
	    }
	  public void setPassword(String password) {
	        this.password = password;
	    }
	  public void setType(String type) {
	        this.type = type;
	    }
}
