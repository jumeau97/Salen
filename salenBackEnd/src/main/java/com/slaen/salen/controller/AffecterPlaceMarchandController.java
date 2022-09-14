package com.slaen.salen.controller;


import com.slaen.salen.entity.AffecterPlaceMarchand;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.payload.AffectationPlaceMarchand;
import com.slaen.salen.service.AffecterPlaceMarchandService;
import com.slaen.salen.service.Saleninterface.AffecterPlaceMarchandInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/affectation")
public class AffecterPlaceMarchandController {
    AffecterPlaceMarchandInterface affecterPlaceMarchandInterface;
    @Autowired
    AffecterPlaceMarchandService affecterPlaceMarchandService;

    @GetMapping("/listeAffecterPlaceMarchand")
    List <AffecterPlaceMarchand> liste(){
        return affecterPlaceMarchandInterface.listeAffecterPlaceMarchand();
    }

    @PostMapping("/add/place/marchand")
    public ResponseEntity<?> AffPlaceMarchand(@RequestBody AffectationPlaceMarchand affectationPlaceMarchand) {
        return new ResponseEntity<>(affecterPlaceMarchandService.affNewMarchandPlace (affectationPlaceMarchand), HttpStatus.OK);
    }

    @PostMapping("/marchand")
    public @ResponseBody ResponseEntity<?> findMarchandByPlace(@RequestBody Place place){
        return new ResponseEntity<>(affecterPlaceMarchandService.findMarchandByPlace(place), HttpStatus.OK);
    }

    @GetMapping("liste/marche/marchands/{id}")
    public ResponseEntity<?> findMarchByMarch(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(affecterPlaceMarchandService.marchandByMarche(id), HttpStatus.OK);
    }

    @GetMapping("/place/marchand/{id}")
    public ResponseEntity<?> findPlaceByMarchand(@PathVariable(value = "id") long id){
        return new ResponseEntity<>(affecterPlaceMarchandService.findPlaceByMarchand(id), HttpStatus.OK);
    }

    @GetMapping("/remove/trader/place/{id}/{id1}")
    public ResponseEntity<?> RemoveTrader(@PathVariable(value = "id") long id,
                                          @PathVariable(value = "id1") long id1){
        return new ResponseEntity<>(affecterPlaceMarchandService.removeTrader(id,id1), HttpStatus.OK);
    }



}
