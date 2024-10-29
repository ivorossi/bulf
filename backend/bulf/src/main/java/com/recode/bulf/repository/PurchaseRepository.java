package com.recode.bulf.repository;

import com.recode.bulf.dto.PurchaseResponseUserDto;
import com.recode.bulf.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    List<Purchase> findByUserId(Integer userId);
}
