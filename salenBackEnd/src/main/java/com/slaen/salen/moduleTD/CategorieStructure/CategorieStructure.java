package com.slaen.salen.moduleTD.CategorieStructure;

import com.slaen.salen.moduleTD.Taxe.Taxe;

import javax.persistence.*;

@Entity
public class CategorieStructure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String libelle;
    private String tauxMens;
    private String tauxAnnuel;
    @ManyToOne
    private Taxe taxe;
}
