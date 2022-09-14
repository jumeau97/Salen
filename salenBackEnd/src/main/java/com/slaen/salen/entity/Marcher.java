package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Marcher implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idMarcher;
    @Column(length = 50)
    private String libelleMarcher;

    @ManyToOne
    private Mairie mairie;

    public Marcher() {
    }

    public Marcher(String libelleMarcher, Mairie mairie) {
        this.libelleMarcher = libelleMarcher;
        this.mairie = mairie;
    }

    public long getIdMarcher() {
        return idMarcher;
    }

    public void setIdMarcher(long idMarcher) {
        this.idMarcher = idMarcher;
    }

    public String getLibelleMarcher() {
        return libelleMarcher;
    }

    public void setLibelleMarcher(String libelleMarcher) {
        this.libelleMarcher = libelleMarcher;
    }

    public Mairie getMairie() {
        return mairie;
    }

    public void setMairie(Mairie mairie) {
        this.mairie = mairie;
    }
}
