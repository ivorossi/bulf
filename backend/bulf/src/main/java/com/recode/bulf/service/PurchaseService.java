package com.recode.bulf.service;

import com.recode.bulf.dto.ProductCard;
import com.recode.bulf.dto.PurchaseResponseUserDto;
import com.recode.bulf.model.Product;
import com.recode.bulf.model.Purchase;
import com.recode.bulf.model.User;
import com.recode.bulf.repository.PurchaseRepository;
import com.recode.bulf.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseService {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final PurchaseRepository purchaseRepository;
    public List<PurchaseResponseUserDto> getPurchaseByEmail(String email) {
        User user = userRepository.findByEmail(email).get();
        List<PurchaseResponseUserDto> response = new ArrayList<>();
         List<Purchase> purchases = purchaseRepository.findByUserId(user.getId());
         for (Purchase purchase: purchases){
             List<ProductCard> productsResponse = new ArrayList<>();
             for(Product product : purchase.getProducts()){
                 productsResponse.add(
                         new ProductCard(
                                 product.getId(),
                                 product.getName(),
                                 product.getMainImage(),
                                 product.getDescription(),
                                 product.getPrice()
                         )
                 );
             }
             response.add(
                     new PurchaseResponseUserDto(
                             purchase.getPaymentId(),
                             productsResponse,
                             purchase.getTotalCost(),
                             purchase.getStatus()
                             )
             );
         }
         return response;
    }
}


