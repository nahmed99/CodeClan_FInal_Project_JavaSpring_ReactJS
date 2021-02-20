package com.example.codeclan.advertserivce.models;

import com.example.codeclan.advertserivce.helpers.CategoryType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;


@MappedSuperclass
public abstract class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private CategoryType category;

    @Column
    private String title;

    @Column
    private String description;

    // This is cost to place the advert.
    @Column
    private double cost;

    // Many adverts can belong to one customer.
    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    @JsonIgnoreProperties({"adverts"})
    private Customer customer;

    // Default constructor - to be used by Spring
    public Advert() {
    }


    public Advert(CategoryType category, String title, String description, double cost, Customer customer) {
        this.category = category;
        this.title = title;
        this.description = description;
        this.cost = cost;
        this.customer = customer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CategoryType getCategory() {
        return category;
    }

    public void setCategory(CategoryType category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
