package com.recode.bulf.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "gender_id", nullable = false)
    private long genderId; // ID del género


    @Column(name = "category_id", nullable = false)
    
    private long category; // Relación con Category

    @Column(name = "subcategory_id", nullable = false)
    private long subcategoryId; // ID de la subcategoría

    @Column
    private String mainImage;

    @ElementCollection
    private List<String> images;

    @Column
    private String description;

    @Column
    private float price;

    @Column
    private float stock;

    @Column
    private LocalDateTime date;

    // Getters, setters y toString

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", genderId=" + genderId +
                ", categoryId=" + (category != null ? category.getId() : null) +  // Acceso al ID de Category
                ", subcategoryId=" + subcategoryId +
                ", mainImage='" + mainImage + '\'' +
                ", images=" + images +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", stock=" + stock +
                ", date=" + date +
                '}';
    }
}
