package com.recode.bulf.controller;

import com.recode.bulf.dto.PurchaseDTO;
import com.recode.bulf.model.*;
import com.recode.bulf.service.AdminService;
import com.recode.bulf.service.ProductService;
import com.recode.bulf.service.PurchaseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth/admin")
@RequiredArgsConstructor
public class AdminCreateController {
    @Autowired
    private final AdminService adminService;
    @Autowired
    private final ProductService productService;
    @Autowired
    private final PurchaseService purchaseService;

    @PostMapping("/gender")
    public ResponseEntity<Gender> createGender(@RequestBody Gender gender) {
        Gender createdGender = adminService.createGender(gender);
        return ResponseEntity.ok(createdGender);
    }

    @PostMapping("/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category createCategory = adminService.createCategory(category);
        return ResponseEntity.ok(createCategory);
    }

    @DeleteMapping("/gender/{id}")
    public ResponseEntity<Void> deleteGender(@PathVariable Long id) {
        adminService.deleteGender(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/category/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        adminService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/subcategory/{id}")
    public ResponseEntity<Void> deleteSubcategory(@PathVariable Long id) {
        adminService.deleteSubcategory(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/subcategory")
    public ResponseEntity<Subcategory> createSubcategory(@RequestBody Subcategory subcategory) {
        Subcategory createSubcategory = adminService.createSubcategory(subcategory);
        return ResponseEntity.ok(createSubcategory);
    }


    @PostMapping("/product")
    public ResponseEntity<Void> createProduct(@Valid @RequestBody Product product) {
        productService.createProduct(product);
        return ResponseEntity.status(201).build();
    }

    @GetMapping("/product")
    public ResponseEntity<Page<Product>> getPagedProducts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "100") int size) {
        Page<Product> products = productService.getPagedProducts(page, size);
        return ResponseEntity.ok(products);
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        boolean isDeleted = productService.deleteProductById(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        Product product = productService.updateProduct(id, updatedProduct);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/purchase")
    public ResponseEntity<List<PurchaseDTO>> getAllPurchase() {
        return ResponseEntity.ok(purchaseService.getAll());
    }

}
