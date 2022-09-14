package com.slaen.salen.entity.payload;

import com.slaen.salen.entity.Marcher;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;

import java.util.List;

public class AffectationPlaceRecouvreur {
    public Utilisateur utilisateur;
    public List<Place> place;

    public AffectationPlaceRecouvreur() {
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public List<Place> getPlace() {
        return place;
    }

    public void setPlace(List<Place> place) {
        this.place = place;
    }
}
