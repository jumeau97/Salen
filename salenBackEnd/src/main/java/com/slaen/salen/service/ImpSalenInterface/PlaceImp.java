package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.Place;
import com.slaen.salen.repository.PlaceRepository;
import com.slaen.salen.service.Saleninterface.PlaceInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceImp implements PlaceInterface {

    private PlaceRepository placeRepository;

    public PlaceImp(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @Override
    public Place addPlace(Place place) {
        return placeRepository.save(place);
    }

    @Override
    public List<Place> listePlace() {
        return placeRepository.findAll();
    }

    @Override
    public Place listeById(long id) {
        return placeRepository.findById(id).get();
    }

    @Override
    public Place UpdatePlace(Place place) {
        return placeRepository.save(place);
    }

    @Override
    public void deletePlace(long id) {
        placeRepository.deleteById(id);
    }
}
