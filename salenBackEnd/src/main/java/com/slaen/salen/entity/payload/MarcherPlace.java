package com.slaen.salen.entity.payload;

import com.slaen.salen.entity.Marcher;
import com.slaen.salen.entity.Place;

import java.util.List;

public class MarcherPlace {
    public Marcher marcher;
    public Place place;


    public MarcherPlace(Marcher marcher, Place place) {
        this.marcher = marcher;
        this.place = place;
    }

    public Marcher getMarcher() {
        return marcher;
    }

    public Place getPlace() {
        return place;
    }

    public void setPlace(Place place) {
        this.place = place;
    }

    public void setMarcher(Marcher marcher) {
        this.marcher = marcher;
    }

}
