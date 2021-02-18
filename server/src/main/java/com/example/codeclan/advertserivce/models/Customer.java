package com.example.codeclan.advertserivce.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
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


    // Note to self!
    // As the Advert class is @MappedSuperclass, it can't be an @AEntity.
    // Therefore the following is not allowed. I will need to create lists
    // of each type of Advert subclass (Job, Property and Car). Just have to
    // redesign the UI...three separate lists/types of adverts (or join the
    // three lists (as List) and then create one list to display.
    //
    // @OneToMany(mappedBy = "customer")
    // @JsonIgnoreProperties({"customer"})
    // private List<Advert> adverts;
    //

    // One customer can have many adverts
    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<CarAdvert> carAdverts;

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<JobAdvert> jobAdverts;

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<PropertyAdvert> propertyAdverts;


    // Default constructor for Spring to use
    public Customer() {
    }

    public Customer(String firstName, String secondName, String email) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;

        this.carAdverts = new ArrayList<>();
        this.jobAdverts = new ArrayList<>();
        this.propertyAdverts = new ArrayList<>();

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

    public List<CarAdvert> getCarAdverts() {
        return carAdverts;
    }

    public void setCarAdverts(List<CarAdvert> carAdverts) {
        this.carAdverts = carAdverts;
    }

    public List<JobAdvert> getJobAdverts() {
        return jobAdverts;
    }

    public void setJobAdverts(List<JobAdvert> jobAdverts) {
        this.jobAdverts = jobAdverts;
    }

    public List<PropertyAdvert> getPropertyAdverts() {
        return propertyAdverts;
    }

    public void setPropertyAdverts(List<PropertyAdvert> propertyAdverts) {
        this.propertyAdverts = propertyAdverts;
    }
}
