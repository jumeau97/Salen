package com.slaen.salen.moduleTD.Structure;

import com.slaen.salen.moduleTD.Secteur.Secteur;

import javax.persistence.*;

@Entity
public class Structure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String adresse;
    private String longitude;
    private String latitude;
    private String email;
    private String tel;
    private String nomCompletRespons;
    private String telRespons;
    private boolean etatAff;
    @ManyToOne
    private Secteur secteur;

}
