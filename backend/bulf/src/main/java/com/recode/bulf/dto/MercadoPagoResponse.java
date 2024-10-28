package com.recode.bulf.dto;

public record MercadoPagoResponse(
        Long collection_id,
        String collection_status,
        Long payment_id,
        String status,
        String external_reference,
        String payment_type,
        Long merchant_order_id,
        String preference_id,
        String site_id,
        String processing_mode,
        String merchant_account_id
) {
}