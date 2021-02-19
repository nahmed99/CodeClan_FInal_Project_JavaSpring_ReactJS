package com.example.codeclan.advertserivce.controllers;

import com.example.codeclan.advertserivce.models.PropertyAdvert;
import com.example.codeclan.advertserivce.repositories.PropertyAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PropertyAdvertController {

    @Autowired
    PropertyAdvertRepository propertyAdvertRepository;

    // GET ALL
    @GetMapping(value = "/properties")
    public ResponseEntity<List<PropertyAdvert>> getAllPropertyAdverts(
            @RequestParam(name="search", required = false) String searchString
    ) {

        if (searchString != null) {
            // Get only property adverts that match the search criteria
            List<PropertyAdvert> searchedPropertyAdverts = propertyAdvertRepository.findByTitleContainingIgnoreCase(searchString);
            return new ResponseEntity<>(searchedPropertyAdverts, HttpStatus.OK);
        }

        // Return all property adverts
        List<PropertyAdvert> searchedPropertyAdverts = propertyAdvertRepository.findAll();
        return new ResponseEntity<>(searchedPropertyAdverts, HttpStatus.OK);
    }


    // GET (retrieve one) by ID
    @GetMapping(value = "/properties/{id}")
    public ResponseEntity<Optional<PropertyAdvert>> getPropertyAdvert(@PathVariable Long id) {
        return new ResponseEntity<>(propertyAdvertRepository.findById(id), HttpStatus.OK);
    }


    // POST (create)
    @PostMapping("/properties")
    public ResponseEntity<PropertyAdvert> createPropertyAdvert(@RequestBody PropertyAdvert propertyAdvert) {
        propertyAdvertRepository.save(propertyAdvert);
        return new ResponseEntity<>(propertyAdvert, HttpStatus.CREATED);
    }

    // Patch (update) CarAdvert - note the use of the id as parameter input in url,
    // but no use of it (directly) in the parameters list of the function - the
    // function uses the propertyAdvert object that is sent in the request body. The id
    // is sent via a pathvariable, and must be handled in the background by Spring etc.
    @PatchMapping(value = "/properties/{id}")
    public ResponseEntity<PropertyAdvert> updatePropertyAdvert(@RequestBody PropertyAdvert propertyAdvert) {
        propertyAdvertRepository.save(propertyAdvert); // update
        return new ResponseEntity<>(propertyAdvert, HttpStatus.OK);
    }


    @DeleteMapping(value = "/properties/{id}")
    public ResponseEntity<PropertyAdvert> deletePropertyAdvert(@PathVariable Long id) {
        PropertyAdvert found = propertyAdvertRepository.getOne(id);
        propertyAdvertRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
