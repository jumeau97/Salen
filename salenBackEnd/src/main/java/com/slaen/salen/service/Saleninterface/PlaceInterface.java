package com.slaen.salen.service.Saleninterface;



import com.slaen.salen.entity.Place;

import java.util.List;

public interface PlaceInterface {

    public Place addPlace(Place place);
    public List<Place> listePlace();
    public Place listeById(long id);
    public Place UpdatePlace(Place place);
    public void deletePlace(long id);
}
