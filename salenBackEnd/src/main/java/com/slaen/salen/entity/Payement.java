package com.slaen.salen.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Payement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPayement;
    @Temporal(TemporalType.DATE)
    private Date datePayement;
    @NotNull
    private double montantPayement;
    @NotNull
    private double resteApaye;
    @ManyToOne
    private Place place;
    @ManyToOne
    private JourRecou jourRecou;

    public Payement() {
    }

    public Payement(Date datePayement, double montantPayement, double resteApaye, Place place, JourRecou jourRecou) {
        this.datePayement = datePayement;
        this.montantPayement = montantPayement;
        resteApaye = resteApaye;
        this.place = place;
        this.jourRecou = jourRecou;
    }

    public long getIdPayement() {
        return idPayement;
    }

    public void setIdPayement(long idPayement) {
        this.idPayement = idPayement;
    }

    public Date getDatePayement() {
        return datePayement;
    }

    public void setDatePayement(Date datePayement) {
        this.datePayement = datePayement;
    }

    public double getMontantPayement() {
        return montantPayement;
    }

    public void setMontantPayement(double montantPayement) {
        this.montantPayement = montantPayement;
    }

    public double getResteApaye() {
        return resteApaye;
    }

    public void setResteApaye(double resteApaye) {
        resteApaye = resteApaye;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }

    public JourRecou getJourRecou() {
        return jourRecou;
    }

    public void setJourRecou(JourRecou jourRecou) {
        this.jourRecou = jourRecou;
    }

}
