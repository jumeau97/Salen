package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

@Entity
public class AffecterPlaceMarchand implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idAffecterPlaceMarchand;
    @Temporal(TemporalType.DATE)
    private Date dateAffecterPlaceMarchand;

    @ManyToOne
    private Marchand marchand;
    @ManyToOne
    private Place place;

    public AffecterPlaceMarchand() {
    }

    public AffecterPlaceMarchand(Date dateAffecterPlaceMarchand, Marchand marchand, Place place) {
        this.dateAffecterPlaceMarchand = dateAffecterPlaceMarchand;
        this.marchand = marchand;
        this.place = place;
    }

    public long getIdAffecterPlaceMarchand() {
        return idAffecterPlaceMarchand;
    }

    public void setIdAffecterPlaceMarchand(long idAffecterPlaceMarchand) {
        this.idAffecterPlaceMarchand = idAffecterPlaceMarchand;
    }

    public Date getDateAffecterPlaceMarchand() {
        return dateAffecterPlaceMarchand;
    }

    public void setDateAffecterPlaceMarchand(Date dateAffecterPlaceMarchand) {
        this.dateAffecterPlaceMarchand = dateAffecterPlaceMarchand;
    }

    public Marchand getMarchand() {
        return marchand;
    }

    public void setMarchand(Marchand marchand) {
        this.marchand = marchand;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }
}
