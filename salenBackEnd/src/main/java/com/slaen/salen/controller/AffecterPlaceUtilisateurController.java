package com.slaen.salen.controller;

import com.slaen.salen.entity.*;
import com.slaen.salen.entity.payload.AffectationPlaceRecouvreur;
import com.slaen.salen.repository.AffecterPlaceUtilisateurRepository;
import com.slaen.salen.service.AffecterPlaceUtilisateurService;
import com.slaen.salen.service.Saleninterface.AffecterPlaceUtilisateurInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/placeToUtilisateur")
public class AffecterPlaceUtilisateurController {

    @Autowired
    private AffecterPlaceUtilisateurInterface affecterPlaceUtilisateurInterface;

    private AffecterPlaceUtilisateurRepository affecterPlaceUtilisateurRepository;
    @Autowired
    private AffecterPlaceUtilisateurService affecterPlaceUtilisateurService;


    public AffecterPlaceUtilisateurController(AffecterPlaceUtilisateurInterface affecterPlaceUtilisateurRepository, AffecterPlaceUtilisateurRepository affecterPlaceUtilisateurRepository1, AffecterPlaceUtilisateurService affecterPlaceUtilisateurService) {
        this.affecterPlaceUtilisateurInterface = affecterPlaceUtilisateurRepository;
        this.affecterPlaceUtilisateurRepository = affecterPlaceUtilisateurRepository1;
        this.affecterPlaceUtilisateurService = affecterPlaceUtilisateurService;
    }


    @PostMapping("/place/Utilisateur")
    public ResponseEntity<?> placeToUtilisateurNew(@RequestBody AffectationPlaceRecouvreur affectationPlaceRecouvreur) {
        return new ResponseEntity<>(affecterPlaceUtilisateurService.savePlaceRecouvreurAff(affectationPlaceRecouvreur), HttpStatus.OK);
    }

    @GetMapping("/listeAffecterPlaceUtilisateur")
    public List<AffecterPlaceUtilisateur> listeAffecter() {
        return affecterPlaceUtilisateurInterface.listeAffecterPlaceUtilisateur();
    }


    @GetMapping("/affecterPlaceUser/{id}")
    public ResponseEntity<?> lstAssignRecou(@PathVariable(name = "id") Long id) {

        return new ResponseEntity<>(affecterPlaceUtilisateurService.listPlaceByRecou(id), HttpStatus.OK);
    }

    @GetMapping("/findPlaceByUser/{idMarcher}/{idUser}")
    public ResponseEntity<?> findPlaceByUser(@PathVariable(name = "idMarcher") Long idMarcher,@PathVariable(name = "idUser") Long idUser) {

        return new ResponseEntity<>(affecterPlaceUtilisateurService.findPlaceByUser(idMarcher,idUser), HttpStatus.OK);
    }

    @GetMapping("/liste/marche/recouvreur/{id}")
    public ResponseEntity<?> findRecouByMarche(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(affecterPlaceUtilisateurService.findRecouByMarche(id), HttpStatus.OK);
    }


    @GetMapping("/place/recouvreur/{id}")
    public ResponseEntity<?> findPlaceByRecou(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(affecterPlaceUtilisateurService.findPlaceByUser(id), HttpStatus.OK);
    }

}
