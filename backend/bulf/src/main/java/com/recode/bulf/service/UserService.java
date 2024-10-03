package com.recode.bulf.service;

import com.recode.bulf.dto.LoginRequest;
import com.recode.bulf.model.User;
import com.recode.bulf.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is already registered.");
        }

        userRepository.save(user);
        return "User registered successfully.";
    }

    public String authenticateUser(LoginRequest loginRequest) {

        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            // Generate a token (e.g., JWT) or return user details
            return "your-generated-token"; // Replace with actual token generation logic
        }
        return null; // Return null if authentication fails
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

}
