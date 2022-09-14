package com.slaen.salen.entity.payload;

import com.slaen.salen.entity.Marchand;
import com.slaen.salen.entity.Place;

import java.util.List;

public class AffectationPlaceMarchand {

    Marchand marchand;
    List<Place> place;

    public AffectationPlaceMarchand() {
    }

    public Marchand getMarchand() {
        return marchand;
    }

    public void setMarchand(Marchand marchand) {
        this.marchand = marchand;
    }

    public List<Place> getPlace() {
        return place;
    }

    public void setPlace(List<Place> place) {
        this.place = place;
    }
}
