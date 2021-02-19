package com.example.codeclan.advertserivce.repositories;

import com.example.codeclan.advertserivce.models.CarAdvert;
import com.example.codeclan.advertserivce.models.JobAdvert;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
// NOTE: As this is a subclass, it will extend the parent repository:
public interface JobAdvertRepository extends AdvertRepository<JobAdvert, Long> {

    List<JobAdvert> findByTitleContainingIgnoreCase(String searchString);

}
