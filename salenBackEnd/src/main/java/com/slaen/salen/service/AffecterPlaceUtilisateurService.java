package com.slaen.salen.service;

//import com.slaen.salen.controller.LoggingController;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;
import com.slaen.salen.entity.payload.AffectationPlaceRecouvreur;
import com.slaen.salen.entity.payload.AssigneMarketAndPlaceByrRecouv;
import com.slaen.salen.repository.PlaceRepository;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import com.slaen.salen.entity.AffecterPlaceUtilisateur;
import com.slaen.salen.entity.Response;
import com.slaen.salen.repository.AffecterPlaceUtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AffecterPlaceUtilisateurService {

    @Autowired
    PlaceRepository placeRepository;

    @Autowired
    AffecterPlaceUtilisateurRepository affecterPlaceUtilisateurRepository;
    AffecterPlaceUtilisateur affecterPlaceUtilisateur;
//    Logger LOG = LogManager.getLogger(LoggingController.class);

    public Response listPlaceByRecou(Long id) {
        List<AffecterPlaceUtilisateur> a = new ArrayList<>();
        List<AssigneMarketAndPlaceByrRecouv> ass = new ArrayList<>();

        try {

            a = affecterPlaceUtilisateurRepository.findMarketByIdRecouvreur(id);
            for (int i = 0; i < a.size(); i++) {
                AssigneMarketAndPlaceByrRecouv as = new AssigneMarketAndPlaceByrRecouv();
                as.setMarcher(a.get(i).getPlace().getMarcher());
                as.setUtilisateur(a.get(i).getUtilisateur());
                as.setPlace(a.get(i).getPlace());
                as.setId(a.get(i).getIdAffecterPlaceUtilisateur());
                ass.add(as);
            }

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(ass, "Liste des places retrouvées avec succès");
    }

    public Response findPlaceByUser(Long idMarcher, Long idUser) {
        List<AffecterPlaceUtilisateur> a = new ArrayList<>();

        try {

            a = affecterPlaceUtilisateurRepository.findPlaceByUser(idMarcher,idUser);


        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des places retrouvées avec succès");
    }




    public Response savePlaceRecouvreurAff(AffectationPlaceRecouvreur affectationPlaceRecouvreur) {

        try {
            List<AffecterPlaceUtilisateur> listeAffecterUtilisateur = new ArrayList<>();

            for (Place place : affectationPlaceRecouvreur.getPlace()) {
                AffecterPlaceUtilisateur affecterPlaceUtilisateur = new AffecterPlaceUtilisateur();
                affecterPlaceUtilisateur.setPlace(place);
                affecterPlaceUtilisateur.setUtilisateur(affectationPlaceRecouvreur.getUtilisateur());
                affecterPlaceUtilisateur.setDateAffecterPlaceUtilisateur(new Date());
                AffecterPlaceUtilisateur af = affecterPlaceUtilisateurRepository.saveAndFlush(affecterPlaceUtilisateur);
                if(af !=null){
                   placeRepository.updateByIdPlace(af.getPlace().getIdPlace());
                   //af.getPlace().setEtatAR(true);
                   //placeRepository.saveAndFlush(af.getPlace());
                }
               // listeAffecterUtilisateur.add(affecterPlaceUtilisateur);

            }

            return Response.success("Insertion effectué avec succès avec succès");
//            a=affecterPlaceUtilisateurRepository.InsertPlaceRecouvreurAff(place, utilisateur);

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }

    }

    //find recouvreur by marcher
    public Response findRecouByMarche(Long id){
        List<AffecterPlaceUtilisateur> affRecM = new ArrayList<>();
        affRecM = affecterPlaceUtilisateurRepository.findRecouByMarche(id);

        try{
            if(affRecM == null){
                return Response.error("Liste vide");
            }
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with(affRecM, "Liste retournée avec succès");
    }

    //new find place by idUtilisateur
    public Response findPlaceByUser(Long id){
        List<AffecterPlaceUtilisateur> affRecM = new ArrayList<>();
        affRecM = affecterPlaceUtilisateurRepository.findMarketByIdRecouvreur(id);

        try{
            if(affRecM == null){
                return Response.error("Liste vide");
            }
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with(affRecM, "Liste retournée avec succès");
    }

}
