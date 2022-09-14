package com.slaen.salen.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Cercle implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCercle;
    @Column(length = 50)
    @NotNull
    private String libelleCercle;
    @ManyToOne
    private Region region;

    public Cercle() {
    }

    public Cercle(String libelleCercle, Region region) {
        this.libelleCercle = libelleCercle;
        this.region = region;
    }

    public long getIdCercle() {
        return idCercle;
    }

    public void setIdCercle(long idCercle) {
        this.idCercle = idCercle;
    }

    public String getLibelleCercle() {
        return libelleCercle;
    }

    public void setLibelleCercle(String libelleCercle) {
        this.libelleCercle = libelleCercle;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }
}
