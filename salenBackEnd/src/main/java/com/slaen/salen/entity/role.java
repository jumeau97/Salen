package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class role implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idRole;
    @Column(length = 40)
    private String libelleRole;


    public role() {

    }

    public role(String libelleRole) {
        this.libelleRole = libelleRole;

    }

    public long getIdRole() {
        return idRole;
    }

    public void setIdRole(long idRole) {
        this.idRole = idRole;
    }

    public String getLibelleRole() {
        return libelleRole;
    }

    public void setLibelleRole(String libelleRole) {
        this.libelleRole = libelleRole;
    }

}
