package com.example.codeclan.advertserivce.repositories;

import com.example.codeclan.advertserivce.models.Advert;
import com.example.codeclan.advertserivce.models.CarAdvert;
import com.example.codeclan.advertserivce.models.JobAdvert;
import org.springframework.stereotype.Repository;

import java.util.List;

// NOTE: As this is a subclass, it will extend the parent repository:
@Repository
public interface CarAdvertRepository extends AdvertRepository<CarAdvert, Long> {

    List<CarAdvert> findByTitleContainingIgnoreCase(String searchString);

}


//@Repository
//public interface CarAdvertRepository extends AdvertRepository {
//
//    List<CarAdvert> findByTitleContainingIgnoreCase(String searchString);
////    Iterable<Advert> findByTitleContaining(String searchString);
//}

