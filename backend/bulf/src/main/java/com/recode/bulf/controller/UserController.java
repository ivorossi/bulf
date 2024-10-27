package com.recode.bulf.controller;

import com.recode.bulf.dto.PurchaseRequest;
import com.recode.bulf.model.User;
import com.recode.bulf.service.JwtService;
import com.recode.bulf.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;

    @PostMapping("/purchase")
    public ResponseEntity<?> createPurchase(
            @RequestBody PurchaseRequest purchaseRequest,
            @RequestHeader("Authorization") final String authHeader) {

        String token = authHeader.replace("Bearer ", "");
        if (!jwtService.isTokenValid(token, purchaseRequest.email())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token or email");
        }
        boolean success = userService.processPurchase(purchaseRequest.productIds(), purchaseRequest.email());
        return success ? ResponseEntity.ok("Purchase completed successfully")
                : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing purchase");
    }
}
