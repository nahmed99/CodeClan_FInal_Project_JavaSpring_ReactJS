package com.example.codeclan.advertserivce.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String firstName;

    @Column
    private String secondName;

    @Column
    private String email;

    // One customer can have many adverts
    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<Advert> adverts;

    // Default constructor for Spring to use
    public Customer() {
    }

    public Customer(String firstName, String secondName, String email, List<Advert> adverts) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.adverts = adverts;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Advert> getAdverts() {
        return adverts;
    }

    public void setAdverts(List<Advert> adverts) {
        this.adverts = adverts;
    }
}
