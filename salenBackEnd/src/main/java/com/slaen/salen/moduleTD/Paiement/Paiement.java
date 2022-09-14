package com.slaen.salen.moduleTD.Paiement;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Paiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date dateCreation;
    private Date mensualite;
    private Date datePaiement;
}
