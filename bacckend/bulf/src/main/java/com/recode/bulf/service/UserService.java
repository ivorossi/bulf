package com.recode.bulf.service;

import com.recode.bulf.model.User;
import com.recode.bulf.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User logUp(User user) {
        return userRepository.save(user);
    }

    //desarollar
    public User logIn(User user) {
        return user;
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

}
