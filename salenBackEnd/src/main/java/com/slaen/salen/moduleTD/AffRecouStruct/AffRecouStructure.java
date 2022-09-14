package com.slaen.salen.moduleTD.AffRecouStruct;

import com.slaen.salen.entity.Utilisateur;
import com.slaen.salen.moduleTD.Structure.Structure;

import javax.persistence.*;
import java.util.Date;

@Entity
public class AffRecouStructure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Structure structure;
    @ManyToOne
    private Utilisateur utilisateur;
    private Date dateAff;

}
