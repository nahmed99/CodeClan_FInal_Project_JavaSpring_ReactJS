package com.example.codeclan.advertserivce.controllers;

import com.example.codeclan.advertserivce.models.Customer;
import com.example.codeclan.advertserivce.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    // GET ALL
    @GetMapping(value="/customers")
    public ResponseEntity<List<Customer>> getAllCustomers () {
        List<Customer> allCustomers = customerRepository.findAll();
        return new ResponseEntity<>(allCustomers, HttpStatus.OK);
    }

    // GET (one) by ID
    @GetMapping(value = "/customers/{id}")
    public ResponseEntity<Optional<Customer>> getCustomer(@PathVariable Long id) {
        return new ResponseEntity<>(customerRepository.findById(id), HttpStatus.OK);
    }

    // POST (create) Customer
    @PostMapping("/customers")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
        customerRepository.save(customer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);
    }

}
