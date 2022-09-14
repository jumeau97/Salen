package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Region implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idRegion;
    @Column(length = 50)
    @NotNull
    private String libelleRegion;


    public Region() {
    }

    public Region(String libelleRegion) {
        this.libelleRegion = libelleRegion;
    }

    public long getIdRegion() {
        return idRegion;
    }

    public void setIdRegion(long idRegion) {
        this.idRegion = idRegion;
    }

    public String getLibelleRegion() {
        return libelleRegion;
    }

    public void setLibelleRegion(String libelleRegion) {
        this.libelleRegion = libelleRegion;
    }
}
