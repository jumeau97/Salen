package com.slaen.salen.entity.payload;

import com.slaen.salen.entity.JourRecou;
import com.slaen.salen.entity.Place;

import java.util.List;

public class Payements {
    public List<Place> place;
    public JourRecou jourRecou;
    private double montantPayement;
    private double resteApaye;

    public List<Place> getPlace() {
        return place;
    }

    public void setPlace(List<Place> place) {
        this.place = place;
    }

    public JourRecou getJourRecou() {
        return jourRecou;
    }

    public void setJourRecou(JourRecou jourRecou) {
        this.jourRecou = jourRecou;
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
        this.resteApaye = resteApaye;
    }
}
