package com.recode.bulf.controller;

public record RegisterRequest(
        String name,
        String email,
        String password
) {
}