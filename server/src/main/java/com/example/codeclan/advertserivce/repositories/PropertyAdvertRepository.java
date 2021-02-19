package com.example.codeclan.advertserivce.repositories;

import com.example.codeclan.advertserivce.models.PropertyAdvert;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
// NOTE: As this is a subclass, it will extend the parent repository:
public interface PropertyAdvertRepository extends AdvertRepository {

    List<PropertyAdvert> findByTitleContaining(String searchString);
//    Iterable<Advert> findByTitleContaining(String searchString);
}
