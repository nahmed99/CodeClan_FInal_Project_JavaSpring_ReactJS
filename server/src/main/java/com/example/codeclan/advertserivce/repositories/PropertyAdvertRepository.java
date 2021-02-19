package com.example.codeclan.advertserivce.repositories;

import com.example.codeclan.advertserivce.models.JobAdvert;
import com.example.codeclan.advertserivce.models.PropertyAdvert;
import org.springframework.stereotype.Repository;

import java.util.List;


// NOTE: As this is a subclass, it will extend the parent repository:
@Repository
public interface PropertyAdvertRepository extends AdvertRepository<PropertyAdvert, Long> {

    List<PropertyAdvert> findByTitleContainingIgnoreCase(String searchString);

}
