package com.slaen.salen.service;

import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Response;
import com.slaen.salen.entity.payload.AffecterPlaceMarcher;
import com.slaen.salen.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlaceService {

    @Autowired
    PlaceRepository placeRepository;

    public Response listPlaceByIdMarcher(Long id) {
        List<Place> a = new ArrayList<>();
        try {

            a = placeRepository.findPlaceByIdMarcher(id);

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des places retrouvées avec succès");
    }

//la reponse retourner après l\'envoie'

    public Response listPlaceParMarcherM(Long id) {
        List<Place> a = new ArrayList<>();
        try {

            a = placeRepository.findPlaceParMarcherM(id);

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des places retrouvées avec succès");
    }


    //la reponse retourner après l\'envoie'
    public Response updatePlace(Long id) {
        Place a;

        try {

             a=placeRepository.findByIdPlace(id);


        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des places retrouvées avec succès");
    }


    //la reponse retourner après l\'envoie'
    public Response AffetcerPlaceMarcher(AffecterPlaceMarcher affecterPlaceMarcher) {
        List<AffecterPlaceMarcher> affecterPlaceMarchers = new ArrayList<>();

        try {

            for(Place place : affecterPlaceMarcher.getPlace()){

                Place p =new Place();
                p.setMarcher(affecterPlaceMarcher.getMarcher());
                p.setNumeroPlace(place.getNumeroPlace());
                p.setEtatAR(place.isEtatAR());
                p.setEtatAM(place.isEtatAM());
                
                placeRepository.saveAndFlush(p);
            }

            return Response.success( "Place enregistrée avec succès");


        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }

    }


    //liste des places par marcher et etat actif
    public Response listPlaceByMarcherAM(Long id) {
        List<Place> a = new ArrayList<>();
        try {

            a = placeRepository.findPlaceByMarcherAM(id);

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des places retrouvées avec succès");
    }

    //liste des places par marcher simple
    public Response listPlaceByMarcher(Long id) {
        List<Place> a = new ArrayList<>();
        try {

            a = placeRepository.findPlaceParMarcher(id);

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des places retrouvées avec succès");
    }
}
