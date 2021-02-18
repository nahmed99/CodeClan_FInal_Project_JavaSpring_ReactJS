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

    // GET (retrieve) ALL
    @GetMapping(value="/customers")
    public ResponseEntity<List<Customer>> getAllCustomers () {
        List<Customer> allCustomers = customerRepository.findAll();
        return new ResponseEntity<>(allCustomers, HttpStatus.OK);
    }

    // GET (retrieve one) by ID
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

    // Patch (update) Customer - note the use of the id as parameter input in url,
    // but no use of it (directly) in the parameters list of the function - the
    // function uses the customer object that is sent in the request body. The id
    // is sent via a pathvariable, and must be handled in the background by Spring etc.
    @PatchMapping(value = "/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
        customerRepository.save(customer); // update customer details
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @DeleteMapping(value = "/customers/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable Long id) {
        Customer found = customerRepository.getOne(id);
        customerRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
