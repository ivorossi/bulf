package com.recode.bulf.service;

import com.recode.bulf.model.Product;
import com.recode.bulf.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;


    public Product create(Product product) {
        product.setDate(LocalDateTime.now());
        System.out.println(product);
        return productRepository.save(product);
    }

    public List<Product> getAll(){
        return productRepository.findAll();
    }

}