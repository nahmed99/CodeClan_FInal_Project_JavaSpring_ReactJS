package com.example.codeclan.advertserivce.components;

import com.example.codeclan.advertserivce.helpers.CategoryType;
import com.example.codeclan.advertserivce.helpers.JobType;
import com.example.codeclan.advertserivce.helpers.TransmissionType;
import com.example.codeclan.advertserivce.models.CarAdvert;
import com.example.codeclan.advertserivce.models.Customer;
import com.example.codeclan.advertserivce.models.JobAdvert;
import com.example.codeclan.advertserivce.models.PropertyAdvert;
import com.example.codeclan.advertserivce.repositories.CarAdvertRepository;
import com.example.codeclan.advertserivce.repositories.CustomerRepository;
import com.example.codeclan.advertserivce.repositories.JobAdvertRepository;
import com.example.codeclan.advertserivce.repositories.PropertyAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CarAdvertRepository carAdvertRepository;

    @Autowired
    JobAdvertRepository jobAdvertRepository;

    @Autowired
    PropertyAdvertRepository propertyAdvertRepository;


    // Default constructor for Spring
    public DataLoader(){
    }

    public void run(ApplicationArguments args) {

        Customer cust1 = new Customer("Fred", "Musket", "fredsemail@theemailplace.email");
        customerRepository.save(cust1);

        Customer cust2 = new Customer("Mike", "Hall", "mhallemail@thefreeplace.there");
        customerRepository.save(cust2);

        Customer cust3 = new Customer("Will", "Smythe", "willsmail@bitsandbytes.message");
        customerRepository.save(cust3);


        String[] imgURL1 = {"http://www.bbc.com", "http://www.excite.com", "http://www.yahoo.com"};
        String[] imgURL2 = {"http://www.google.com"};
        String[] imgURL3 = {"http://www.open.ac.uk", "http://www.highgear.com"};

        CarAdvert carAdvert = new CarAdvert(CategoryType.CAR, "Good car for sale",
                "very good runner, low mileage", 25.00, cust1,
                "Fird", "Iscort", 1999, TransmissionType.MANUAL,
                5, 5, "Black", 595.95, imgURL1);
        carAdvertRepository.save(carAdvert);


        CarAdvert carAdvert2 = new CarAdvert(CategoryType.CAR, "Car for quick sale",
                "very good runner, ave mileage", 25.00, cust2,
                "Jaguar", "XJS", 2013, TransmissionType.AUTOMATIC,
                5, 4, "Gold", 7950.45, imgURL3);
        carAdvertRepository.save(carAdvert2);


        JobAdvert jobAdvert = new JobAdvert(CategoryType.JOB, "Server Required For Client Services",
                "Evening and weekend working required", 10.00, cust2,
                "Hospitality", JobType.CONTRACT, 11.75);
        jobAdvertRepository.save(jobAdvert);

        JobAdvert jobAdvert2 = new JobAdvert(CategoryType.JOB, "Chef",
                "Evening and weekend working required", 10.00, cust2,
                "Hospitality", JobType.PERMANENT, 15.95);
        jobAdvertRepository.save(jobAdvert2);

        JobAdvert jobAdvert3 = new JobAdvert(CategoryType.JOB, "Dish washer",
                "Evening and weekend working required", 10.00, cust2,
                "Hospitality", JobType.PERMANENT, 10.45);
        jobAdvertRepository.save(jobAdvert3);

        PropertyAdvert propertyAdvert = new PropertyAdvert(CategoryType.PROPERTY, "Bungalow For Sale",
                "Pleasantly located bungalow", 95.00, cust3,
                "Bungalow", "Next to the tree, West High Street", "G22 CHT", 3,
                345000.99, imgURL2);
        propertyAdvertRepository.save(propertyAdvert);



    }

}