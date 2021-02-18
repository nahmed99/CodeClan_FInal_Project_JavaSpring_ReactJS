package com.example.codeclan.advertserivce.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="property_adverts")
public class PropertyAdvert extends Advert {

    @Column
    private String type;

    @Column
    private String address;

    @Column
    private String postCode;

    @Column
    private int numRooms;

    @Column
    private double price;

    @Column
    private String [] imageUrl;


    // Default constructor for Spring to use
    public PropertyAdvert() {
    }

    public PropertyAdvert(String title, String description, double cost,
                          Customer customer, String type, String address,
                          String postCode, int numRooms, double price,
                          String[] imageUrl) {

        super(title, description, cost, customer);

        this.type = type;
        this.address = address;
        this.postCode = postCode;
        this.numRooms = numRooms;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public int getNumRooms() {
        return numRooms;
    }

    public void setNumRooms(int numRooms) {
        this.numRooms = numRooms;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String[] getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String[] imageUrl) {
        this.imageUrl = imageUrl;
    }
}
