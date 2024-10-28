package com.recode.bulf.controller;

import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import com.recode.bulf.dto.MercadoPagoResponse;
import com.recode.bulf.dto.PurchaseRequest;
import com.recode.bulf.service.JwtService;
import com.recode.bulf.service.MercadoPagoService;
import com.recode.bulf.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/api/auth/user")
@AllArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private final MercadoPagoService mercadoPagoService;

    @PostMapping("/purchase")
    public ResponseEntity<String> createPurchase(@RequestBody PurchaseRequest purchaseRequest, @RequestHeader("Authorization") final String authHeader) {

        String token = authHeader.replace("Bearer ", "");
        if (!jwtService.isTokenValid(token, purchaseRequest.email())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token or email");
        }
        userService.processPurchase(purchaseRequest.products(), purchaseRequest.email());
        PreferenceClient client = new PreferenceClient();
        try {
            Preference preference = client.create(mercadoPagoService.processesPay(purchaseRequest));
            System.out.println(preference.getId());
            System.out.println(preference.getPayer().getEmail());

            return ResponseEntity.ok(preference.getId());
        } catch (MPException e) {
            return ResponseEntity.status(500).body("Error al crear la preferencia de pago");
        } catch (MPApiException e) {
            return ResponseEntity.status(500).body("Error al crear la preferencia de pago");
        }
    }

    @CrossOrigin(origins = "http://localhost:5170")
    @GetMapping("/mercado-pago")
    public RedirectView receiveMercadoPagoResponse(
            @RequestParam Long collection_id,
            @RequestParam String collection_status,
            @RequestParam Long payment_id,
            @RequestParam String status,
            @RequestParam(required = false) String external_reference,
            @RequestParam String payment_type,
            @RequestParam Long merchant_order_id,
            @RequestParam String preference_id,
            @RequestParam String site_id,
            @RequestParam String processing_mode,
            @RequestParam(required = false) String merchant_account_id
    ) {
        System.out.println("Payment ID: " + payment_id);
        System.out.println("Status: " + status);

        return new RedirectView("http://localhost:5173");
    }


}
