package com.recode.bulf.controller;

import com.recode.bulf.dto.ProductCard;
import com.recode.bulf.model.Product;
import com.recode.bulf.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class ProductController {

    @Autowired
    private final ProductService productService;


    @GetMapping("/product")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAll();
        return ResponseEntity.ok(products); // 200 OK
    }

    @GetMapping("/product/paged")
    public ResponseEntity<Page<ProductCard>> getPagedProducts(
            @RequestParam(defaultValue = "0") int page) {
        Page<ProductCard> products = productService.getPagedProducts(page);
        return ResponseEntity.ok(products);
    }
}
