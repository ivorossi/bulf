package com.recode.bulf.dto;

import java.util.List;

public record PurchaseResponseUserDto(Long paymentId, List<ProductCard> products, Double cost, String Status) {
}
