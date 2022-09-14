package com.slaen.salen.service;

import com.slaen.salen.entity.AffecterPlaceMarchand;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Response;
import com.slaen.salen.entity.payload.AffectationPlaceMarchand;
import com.slaen.salen.entity.payload.AffectationPlaceRecouvreur;
import com.slaen.salen.repository.AffecterPlaceMarchandRepository;
import com.slaen.salen.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AffecterPlaceMarchandService {

    @Autowired
    AffecterPlaceMarchandRepository affecterPlaceMarchandRepository;
    @Autowired
    PlaceRepository placeRepository;

    public Response affNewMarchandPlace(AffectationPlaceMarchand affectationPlaceMarchand) {

        try {
            for (Place place:affectationPlaceMarchand.getPlace() ) {
                AffecterPlaceMarchand affecter=new AffecterPlaceMarchand();
                affecter.setPlace(place);
                affecter.setMarchand(affectationPlaceMarchand.getMarchand());
                affecter.setDateAffecterPlaceMarchand(new Date());
                AffecterPlaceMarchand aff= affecterPlaceMarchandRepository.saveAndFlush(affecter);

                if (aff!=null){
                   placeRepository.updateEtatMByIdPlace(aff.getPlace().getIdPlace());

                }

            }

            return Response.success("Insertion effectué avec succès avec succès");


        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }

    }

    public Response findMarchandByPlace(Place place){
        AffecterPlaceMarchand apm;


        try{
            apm=affecterPlaceMarchandRepository.findByPlace(place);
            if (apm==null){
                return Response.error("Aucune donnée trouvée");
            }
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenu");
        }
        return Response.with(apm,"donnée retourné");
    }


    public Response marchandByMarche(Long id){
        List<AffecterPlaceMarchand> affPlMarch = new ArrayList<>();
        affPlMarch = affecterPlaceMarchandRepository.findMarchandByMarcher(id);

        try{
            if(affPlMarch == null){
                return Response.error("liste vide");
            }
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue");
        }
        return Response.with(affPlMarch,"liste retournée");
    }


    //find Place by Marchand

    public Response findPlaceByMarchand(long id){
        List<AffecterPlaceMarchand> affPlMarch = new ArrayList<>();
        affPlMarch=affecterPlaceMarchandRepository.findPlaceByMarchand(id);
        try{
            if(affPlMarch == null){
                return Response.error("liste vide");
            }
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue");
        }
        return Response.with(affPlMarch,"liste retournée");

    }

    //remove trader method
    public Response removeTrader(long id, long id1){


        try{
            affecterPlaceMarchandRepository.deleteById(id1);
            placeRepository.updateEtatAMTOFALSE(id);


        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.success("une erreur s'est produite");
        }

        return Response.success("retrait confirmer");
    }
}
