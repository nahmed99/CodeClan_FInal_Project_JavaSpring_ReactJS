package com.example.codeclan.advertserivce.models;

import javax.persistence.*;

@Entity
@Table(name="adverts")
public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // One advert will have one item for sale. Item can't
    // exist without an Advert, therefore cascade deletion.
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "item_id", referencedColumnName = "id")

    // Many adverts can have one customer. Customer can
    // have many adverts.
    @ManyToOne???
    @JoinColumn(name = "item_id", referencedColumnName = "id")

    @Column
    private double cost;


}
