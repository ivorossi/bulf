package com.recode.bulf.controller;

import com.recode.bulf.dto.LoginRequest;
import com.recode.bulf.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<String> loginUser( @RequestBody LoginRequest loginRequest) {
        // Authenticate the user
        String token = userService.authenticateUser(loginRequest);
        if (token != null) {
            return ResponseEntity.ok(token); // Return JWT or session token
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}
