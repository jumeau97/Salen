package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Place implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPlace;
    @Column(length = 50)
    @NotNull
    private int numeroPlace;

    @ManyToOne
    private Marcher marcher;

    private boolean etatAR;

    private boolean etatAM;


    public Place() {
    }

    public Place(int numeroPlace, Marcher marcher, boolean etatAR, boolean etatAM) {
        this.numeroPlace = numeroPlace;
        this.marcher = marcher;
        this.etatAR = etatAR;
        this.etatAM = etatAM;
    }

    public long getIdPlace() {
        return idPlace;
    }

    public void setIdPlace(long idPlace) {
        this.idPlace = idPlace;
    }

    public int getNumeroPlace() {
        return numeroPlace;
    }

    public void setNumeroPlace(int numeroPlace) {
        this.numeroPlace = numeroPlace;
    }

    public Marcher getMarcher() {
        return marcher;
    }

    public void setMarcher(Marcher marcher) {
        this.marcher = marcher;
    }

    public boolean isEtatAR() {
        return etatAR;
    }

    public void setEtatAR(boolean etatAR) {
        this.etatAR = etatAR;
    }

    public boolean isEtatAM() {
        return etatAM;
    }

    public void setEtatAM(boolean etatAM) {
        this.etatAM = etatAM;
    }
}
