package com.example.codeclan.advertserivce.repositories;

import com.example.codeclan.advertserivce.models.CarAdvert;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
// NOTE: As this is a subclass, it will extend the parent repository:
public interface CarAdvertRepository extends AdvertRepository {

    List<CarAdvert> findByTitleContaining(String searchString);
//    Iterable<Advert> findByTitleContaining(String searchString);

}
