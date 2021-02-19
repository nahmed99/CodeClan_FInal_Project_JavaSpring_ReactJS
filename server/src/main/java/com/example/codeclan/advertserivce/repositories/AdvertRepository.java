package com.example.codeclan.advertserivce.repositories;

import com.example.codeclan.advertserivce.models.Advert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;


@NoRepositoryBean
// NOTE: This interface is for a superclass and extends the CrudRepository:
public interface AdvertRepository extends CrudRepository<Advert, Long> {
}
