package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Mairie implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idMairie;
    @Column(length = 50)
    @NotNull
    private String libelleMairie;
    @Column(length = 50)
    @NotNull
    private String quartierMairie;

    private String typeMairie;

    @ManyToOne
    private Commune commune;





    public Mairie() {

    }

    public Mairie(String libelleMairie, String quartierMairie, String typeMairie, Commune commune) {
        this.libelleMairie = libelleMairie;
        this.quartierMairie = quartierMairie;
        this.typeMairie = typeMairie;
        this.commune = commune;
    }

    public long getIdMairie() {
        return idMairie;
    }

    public void setIdMairie(long idMairie) {
        this.idMairie = idMairie;
    }

    public String getLibelleMairie() {
        return libelleMairie;
    }

    public void setLibelleMairie(String libelleMairie) {
        this.libelleMairie = libelleMairie;
    }

    public String getQuartierMairie() {
        return quartierMairie;
    }

    public void setQuartierMairie(String quartierMairie) {
        this.quartierMairie = quartierMairie;
    }

    public String getTypeMairie() {
        return typeMairie;
    }

    public void setTypeMairie(String typeMairie) {
        this.typeMairie = typeMairie;
    }

    public Commune getCommune() {
        return commune;
    }

    public void setCommune(Commune commune) {
        this.commune = commune;
    }
}
