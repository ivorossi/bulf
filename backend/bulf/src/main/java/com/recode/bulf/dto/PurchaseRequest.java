package com.recode.bulf.dto;

import java.util.List;

public record PurchaseRequest(
        List<Long> productIds,
        String token,
        String email
        ) {
}
