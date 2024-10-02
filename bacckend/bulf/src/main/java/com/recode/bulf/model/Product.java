package com.recode.bulf.model;

import jakarta.persistence.*;

import java.util.List;

@Entity(name = "product")
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private String category;

    @Column
    private String subCategory;

    @Column
    private String mainImage;

    @Column
    private List<String> images;

    @Column
    private String description;

    @Column
    private float price;

}
