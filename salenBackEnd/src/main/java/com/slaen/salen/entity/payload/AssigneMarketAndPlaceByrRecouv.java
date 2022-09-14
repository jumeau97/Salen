package com.slaen.salen.entity.payload;

import com.slaen.salen.entity.Marcher;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;

public class AssigneMarketAndPlaceByrRecouv {
    public Marcher marcher;
    public Place place;
    public Long  id;
    public Utilisateur utilisateur;

    public AssigneMarketAndPlaceByrRecouv() {
    }

    public Marcher getMarcher() {
        return marcher;
    }

    public void setMarcher(Marcher marcher) {
        this.marcher = marcher;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }
}
