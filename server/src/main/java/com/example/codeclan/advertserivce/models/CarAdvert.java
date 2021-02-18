package com.example.codeclan.advertserivce.models;

import com.example.codeclan.advertserivce.helpers.TransMissionType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="car_adverts")
public class CarAdvert extends Advert {

    @Column
    private String make;

    @Column
    private String model;

    @Column
    private int regYear;

    @Column
    private TransMissionType transmission;

    @Column
    private int numSeats;

    @Column
    private int numDoors;

    @Column
    private String colour;

    @Column
    private double price;

    @Column
    private String [] imageUrl;


    // Default constructor for Spring
    public CarAdvert() {
    }


    public CarAdvert(String title, String description, double cost,
                     Customer customer, String make, String model,
                     int regYear, TransMissionType transmission, int numSeats,
                     int numDoors, String colour, double price,
                     String[] imageUrl) {

        super(title, description, cost, customer);

        this.make = make;
        this.model = model;
        this.regYear = regYear;
        this.transmission = transmission;
        this.numSeats = numSeats;
        this.numDoors = numDoors;
        this.colour = colour;
        this.price = price;
        this.imageUrl = imageUrl;

    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getRegYear() {
        return regYear;
    }

    public void setRegYear(int regYear) {
        this.regYear = regYear;
    }

    public TransMissionType getTransmission() {
        return transmission;
    }

    public void setTransmission(TransMissionType transmission) {
        this.transmission = transmission;
    }

    public int getNumSeats() {
        return numSeats;
    }

    public void setNumSeats(int numSeats) {
        this.numSeats = numSeats;
    }

    public int getNumDoors() {
        return numDoors;
    }

    public void setNumDoors(int numDoors) {
        this.numDoors = numDoors;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
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
