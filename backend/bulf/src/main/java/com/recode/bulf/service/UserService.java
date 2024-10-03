package com.recode.bulf.service;

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

    //desarollar
    public User logIn(User user) {
        return user;
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

}
