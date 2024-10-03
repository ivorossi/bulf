package com.recode.bulf.repository;

import com.recode.bulf.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

    User findByUsername(String username); // Custom query method
}