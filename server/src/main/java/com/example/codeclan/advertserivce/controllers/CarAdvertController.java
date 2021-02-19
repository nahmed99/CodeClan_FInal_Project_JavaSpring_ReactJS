package com.example.codeclan.advertserivce.controllers;


import com.example.codeclan.advertserivce.models.CarAdvert;
import com.example.codeclan.advertserivce.repositories.CarAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class CarAdvertController {

    @Autowired
    CarAdvertRepository carAdvertRepository;

    // GET ALL
    @GetMapping(value = "/cars")
    public ResponseEntity<List<CarAdvert>> getAllCarAdverts(
            @RequestParam(name="search", required = false) String searchString
    ) {

        if (searchString != null) {
            // Get only car adverts that match the search criteria
            List<CarAdvert> searchedCarAdverts = carAdvertRepository.findByTitleContainingIgnoreCase(searchString);
            return new ResponseEntity<>(searchedCarAdverts, HttpStatus.OK);
        }

        // Return all car adverts
        List<CarAdvert> searchedCarAdverts = carAdvertRepository.findAll();
        return new ResponseEntity<>(searchedCarAdverts, HttpStatus.OK);
    }


    // GET (retrieve one) by ID
    @GetMapping(value = "/cars/{id}")
    public ResponseEntity<Optional<CarAdvert>> getCarAdvert(@PathVariable Long id) {
        return new ResponseEntity<>(carAdvertRepository.findById(id), HttpStatus.OK);
    }


    // POST (create)
    @PostMapping("/cars")
    public ResponseEntity<CarAdvert> createCarAdvert(@RequestBody CarAdvert carAdvert) {
        carAdvertRepository.save(carAdvert);
        return new ResponseEntity<>(carAdvert, HttpStatus.CREATED);
    }

    // Patch (update) CarAdvert - note the use of the id as parameter input in url,
    // but no use of it (directly) in the parameters list of the function - the
    // function uses the carAdvert object that is sent in the request body. The id
    // is sent via a pathvariable, and must be handled in the background by Spring etc.
    @PatchMapping(value = "/cars/{id}")
    public ResponseEntity<CarAdvert> updateCarAdvert(@RequestBody CarAdvert carAdvert) {
        carAdvertRepository.save(carAdvert); // update
        return new ResponseEntity<>(carAdvert, HttpStatus.OK);
    }


    @DeleteMapping(value = "/cars/{id}")
    public ResponseEntity<CarAdvert> deleteCarAdvert(@PathVariable Long id) {
        CarAdvert found = carAdvertRepository.getOne(id);
        carAdvertRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}