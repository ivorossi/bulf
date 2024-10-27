package com.recode.bulf.service;

import com.recode.bulf.model.Product;
import com.recode.bulf.model.User;
import com.recode.bulf.repository.ProductRepository;
import com.recode.bulf.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private  final ProductRepository productRepository;

    public boolean processPurchase(List<Long> productIds, String email) {
        User user = userRepository.findByEmail(email).get();
        List<Product> products = productRepository.findAllById(productIds);
        return user.purchase(products);
    }
}
