package com.slaen.salen.moduleTD.Taxe;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Taxe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;
    private String libelle;
}
