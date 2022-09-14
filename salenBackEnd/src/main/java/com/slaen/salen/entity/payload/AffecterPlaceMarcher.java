package com.slaen.salen.entity.payload;

import com.slaen.salen.entity.Marcher;
import com.slaen.salen.entity.Place;

import java.util.List;

public class AffecterPlaceMarcher {
    Marcher marcher;
    List <Place> place;

    public AffecterPlaceMarcher() {
    }

    public Marcher getMarcher() {
        return marcher;
    }

    public void setMarcher(Marcher marcher) {
        this.marcher = marcher;
    }

    public List<Place> getPlace() {
        return place;
    }

    public void setPlace(List<Place> place) {
        this.place = place;
    }
}
