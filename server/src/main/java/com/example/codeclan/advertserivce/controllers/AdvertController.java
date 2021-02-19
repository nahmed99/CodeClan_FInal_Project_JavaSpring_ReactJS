package com.example.codeclan.advertserivce.controllers;

import com.example.codeclan.advertserivce.models.Advert;
import com.example.codeclan.advertserivce.models.CarAdvert;
import com.example.codeclan.advertserivce.models.JobAdvert;
import com.example.codeclan.advertserivce.models.PropertyAdvert;
import com.example.codeclan.advertserivce.repositories.CarAdvertRepository;
import com.example.codeclan.advertserivce.repositories.JobAdvertRepository;
import com.example.codeclan.advertserivce.repositories.PropertyAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RestController
public class AdvertController {

    @Autowired
    CarAdvertRepository carAdvertRepository;

    @Autowired
    JobAdvertRepository jobAdvertRepository;

    @Autowired
    PropertyAdvertRepository propertyAdvertRepository;


    @GetMapping(value = "/adverts")
    public ResponseEntity<List<Advert>> getAllAdverts (
            @RequestParam(name="search", required = false) String searchString,
            @RequestParam(name = "category", required = false) String category
    ) {

        if (searchString != null && category != null) {

            // Use search string AND category, as entered by the user.

            List<Advert> allCategoryAdverts;

            switch (category) {
                case "CARS":
                    List<CarAdvert> carCategoryAdverts = carAdvertRepository.findByTitleContaining(searchString);
                    // Convert the CarAdvert list to Advert list - wouldn't let me cast for some reason!
                    allCategoryAdverts = Stream.of(carCategoryAdverts)
                            .flatMap(x -> x.stream())
                            .collect(Collectors.toList());
                    break;


                case "JOBS":
                    List<JobAdvert> jobCategoryAdverts = jobAdvertRepository.findByTitleContaining(searchString);
                    // Convert the JobAdvert list to Advert list - wouldn't let me cast for some reason!
                    allCategoryAdverts = Stream.of(jobCategoryAdverts)
                            .flatMap(x -> x.stream())
                            .collect(Collectors.toList());
                    break;

                case "PROPERTIES":
                    List<PropertyAdvert> propertyCategoryAdverts = propertyAdvertRepository.findByTitleContaining(searchString);
                    // Convert the JobAdvert list to Advert list - wouldn't let me cast for some reason!
                    allCategoryAdverts = Stream.of(propertyCategoryAdverts)
                            .flatMap(x -> x.stream())
                            .collect(Collectors.toList());
                    break;

                default:
                    allCategoryAdverts = new ArrayList<>(); // return an empty list
            }

            return new ResponseEntity<>(allCategoryAdverts, HttpStatus.OK);
        }


        if (searchString != null) {

            // Use only search string as entered by the user.

            List<CarAdvert> searchedCarAdverts = carAdvertRepository.findByTitleContaining(searchString);
            List<JobAdvert> searchedJobAdverts = jobAdvertRepository.findByTitleContaining(searchString);
            List<PropertyAdvert> searchedPropertyAdverts = propertyAdvertRepository.findByTitleContaining(searchString);

            // Merge the three lists together, and return...
            List<Advert> allSearchedAdverts = Stream.of(searchedCarAdverts, searchedJobAdverts, searchedPropertyAdverts)
                    .flatMap(x -> x.stream())
                    .collect(Collectors.toList());

            return new ResponseEntity<>(allSearchedAdverts, HttpStatus.OK);
        }


        if (category != null) {

            // Use only category as entered by the user.

            List<Advert> allCategoryAdverts;

            switch (category) {
                case "CARS":
                    allCategoryAdverts = (List<Advert>) carAdvertRepository.findAll();
                    break;

                case "JOBS":
                    allCategoryAdverts = (List<Advert>) jobAdvertRepository.findAll();
                    break;

                case "PROPERTIES":
                    allCategoryAdverts = (List<Advert>) propertyAdvertRepository.findAll();
                    break;

                default:
                    allCategoryAdverts = new ArrayList<>(); // return an empty list
            }

            return new ResponseEntity<>(allCategoryAdverts, HttpStatus.OK);
        }


        // GET ALL Adverts - this is the default data return
        List<Advert> allCarAdverts = (List<Advert>) carAdvertRepository.findAll();
        List<Advert>  allJobAdverts = (List<Advert>) jobAdvertRepository.findAll();
        List<Advert> allPropertyAdverts = (List<Advert>) propertyAdvertRepository.findAll();

        // Merge the three lists together, and return...
        List<Advert> allAdverts = Stream.of(allCarAdverts, allJobAdverts, allPropertyAdverts)
                .flatMap(x -> x.stream())
                .collect(Collectors.toList());

        return new ResponseEntity<>(allAdverts, HttpStatus.OK);
    }
}
