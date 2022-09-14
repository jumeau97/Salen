package com.slaen.salen.controller;


import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.payload.AffecterPlaceMarcher;
import com.slaen.salen.service.PlaceService;
import com.slaen.salen.service.Saleninterface.PlaceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/place")
public class PlaceController {

    @Autowired
    private PlaceService placeService;
    private PlaceInterface placeInterface;

    public PlaceController(PlaceInterface placeInterface) {
        this.placeInterface = placeInterface;
    }

    @PostMapping("/affecter")
    public ResponseEntity<?> AffPlaceMarchand(@RequestBody AffecterPlaceMarcher affecterPlaceMarcher) {
        return new ResponseEntity<>(placeService.AffetcerPlaceMarcher (affecterPlaceMarcher), HttpStatus.OK);
    }

    @PostMapping(value = "/addPlace")
    public Place addPalce(@RequestBody Place place){
        return placeInterface.addPlace(place);
    }

    @GetMapping("/listePlace")
    public List<Place> listePalce(){
        return placeInterface.listePlace();
    }

    @GetMapping("/listeById/{id}")
    public  Place listeById(@PathVariable(name = "id") Long id){
        return placeInterface.listeById(id);
    }

    @PutMapping("/updatePlace/{id}")
    public Place updatePalce(@PathVariable(name = "id") Long id ,@RequestBody Place place){
        place.setIdPlace(id);
        return placeInterface.UpdatePlace(place);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable(name = "id") Long id){
        placeInterface.deletePlace(id);
    }

    @GetMapping("/listePlace/{id}")
    public ResponseEntity<?> listePlace(@PathVariable(name="id") Long id) {

        return new ResponseEntity<>(placeService.listPlaceByIdMarcher(id), HttpStatus.OK);
    }


    @GetMapping("/listePlaceM/{id}")
    public ResponseEntity<?> listePlaceM(@PathVariable(name="id") Long id) {

        return new ResponseEntity<>(placeService.listPlaceParMarcherM(id), HttpStatus.OK);
    }

    @GetMapping("/marche/placeAM/{id}")
    public ResponseEntity<?> marchePlaceAM(@PathVariable(name="id") Long id) {

        return new ResponseEntity<>(placeService.listPlaceByMarcherAM(id), HttpStatus.OK);
    }

    //par marcher simple
    @GetMapping("/place/marche/{id}")
    public ResponseEntity<?> marchePlace(@PathVariable(name="id") Long id) {

        return new ResponseEntity<>(placeService.listPlaceByMarcher(id), HttpStatus.OK);
    }
}
