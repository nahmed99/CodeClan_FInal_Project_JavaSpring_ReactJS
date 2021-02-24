package com.example.codeclan.advertserivce.controllers;

import com.example.codeclan.advertserivce.models.JobAdvert;
import com.example.codeclan.advertserivce.repositories.JobAdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class JobAdvertController {

    @Autowired
    JobAdvertRepository jobAdvertRepository;

    // GET ALL
    @GetMapping(value = "/jobs")
    public ResponseEntity<List<JobAdvert>> getAllJobAdverts(
            @RequestParam(name="search", required = false) String searchString
    ) {

        if (searchString != null) {
            // Get only job adverts that match the search criteria
            List<JobAdvert> searchedJobAdverts = jobAdvertRepository.findByTitleContainingIgnoreCase(searchString);
            return new ResponseEntity<>(searchedJobAdverts, HttpStatus.OK);
        }

        // Return all job adverts
        List<JobAdvert> searchedJobAdverts = jobAdvertRepository.findAll();
        return new ResponseEntity<>(searchedJobAdverts, HttpStatus.OK);
    }


    // GET (retrieve one) by ID
    @GetMapping(value = "/jobs/{id}")
    public ResponseEntity<Optional<JobAdvert>> getJobAdvert(@PathVariable Long id) {
        return new ResponseEntity<>(jobAdvertRepository.findById(id), HttpStatus.OK);
    }


    // POST (create)
    @PostMapping("/jobs")
    public ResponseEntity<JobAdvert> createJobAdvert(@RequestBody JobAdvert jobAdvert) {
        jobAdvertRepository.save(jobAdvert);
        return new ResponseEntity<>(jobAdvert, HttpStatus.CREATED);
    }


    // Patch (update) CarAdvert - note the use of the id as parameter input in url,
    // but no use of it (directly) in the parameters list of the function - the
    // function uses the jobAdvert object that is sent in the request body. The id
    // is sent via a pathvariable, and must be handled in the background by Spring etc.
    @PatchMapping(value = "/jobs/{id}")
    public ResponseEntity<JobAdvert> updateJobAdvert(@RequestBody JobAdvert jobAdvert) {
        jobAdvertRepository.save(jobAdvert); // update details
        return new ResponseEntity<>(jobAdvert, HttpStatus.OK);
    }


    @DeleteMapping(value = "/jobs/{id}")
    public ResponseEntity<JobAdvert> deleteJobAdvert(@PathVariable Long id) {
        JobAdvert found = jobAdvertRepository.getOne(id);
        jobAdvertRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    
}
