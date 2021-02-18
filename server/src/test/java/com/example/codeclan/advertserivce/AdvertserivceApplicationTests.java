package com.example.codeclan.advertserivce;

import com.example.codeclan.advertserivce.helpers.JobType;
import com.example.codeclan.advertserivce.helpers.TransMissionType;
import com.example.codeclan.advertserivce.models.CarAdvert;
import com.example.codeclan.advertserivce.models.Customer;
import com.example.codeclan.advertserivce.models.JobAdvert;
import com.example.codeclan.advertserivce.models.PropertyAdvert;
import com.example.codeclan.advertserivce.repositories.CarAdvertRepository;
import com.example.codeclan.advertserivce.repositories.CustomerRepository;
import com.example.codeclan.advertserivce.repositories.JobAdvertRepository;
import com.example.codeclan.advertserivce.repositories.PropertyAdvertRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AdvertserivceApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	CarAdvertRepository carAdvertRepository;

	@Autowired
	JobAdvertRepository jobAdvertRepository;

	@Autowired
	PropertyAdvertRepository propertyAdvertRepository;

	@Test
	void contextLoads() {
	}


	// THE TESTS

	@Test
	public void canCreateAndSaveCustomer() {
		Customer cust = new Customer("Fred", "Musket", "fredsemail@theemailplace.email");
		customerRepository.save(cust);
	}

	@Test
	public void canCreateAndSaveCarAdvert() {
		Customer cust = new Customer("Fred", "Musket", "fredsemail@theemailplace.email");
		customerRepository.save(cust);

		String[] imgURL = {"http://www.bbc.com"};

		CarAdvert carAdvert = new CarAdvert("Good car for sale",
				"very good runner, low mileage", 25.00, cust,
				"Fird", "Iscort", 1999, TransMissionType.MANUAL,
				5, 5, "Black", 500.00, imgURL);

		carAdvertRepository.save(carAdvert);
	}

	@Test
	public void canCreateAndSavePropertyAdvert() {
		Customer cust = new Customer("Fred", "Musket", "fredsemail@theemailplace.email");
		customerRepository.save(cust);

		String[] imgURL = {"http://www.google.com"};

		PropertyAdvert propertyAdvert = new PropertyAdvert("Bungalow For Sale",
				"Pleasantly located bungalow", 95.00, cust,
				"Bungalow", "Next to the tree, West High Street", "G22 CHT", 3,
				345000, imgURL);

		propertyAdvertRepository.save(propertyAdvert);
	}


	@Test
	public void canCreateAndSaveJobAdvert() {
		Customer cust = new Customer("Fred", "Musket", "fredsemail@theemailplace.email");
		customerRepository.save(cust);

		JobAdvert jobAdvert = new JobAdvert("Server Required For Client Services",
				"Evening and weekend working required", 10.00, cust,
				"Hospitality", JobType.CONTRACT, 11.75);

		jobAdvertRepository.save(jobAdvert);
	}

}
