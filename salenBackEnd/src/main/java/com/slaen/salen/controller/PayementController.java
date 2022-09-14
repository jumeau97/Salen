package com.slaen.salen.controller;

import com.slaen.salen.entity.Payement;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.payload.Payements;
import com.slaen.salen.service.PayementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class PayementController {
    @Autowired
    PayementService payementService;

    @PostMapping("/save/paiement")
    public ResponseEntity<?> save(@RequestBody Payement payement){
        return new ResponseEntity<>(payementService.savePaiement(payement), HttpStatus.OK);
    }

    //insertion plusieurs place dans paiement
    @PostMapping("/save/places/paiement")
    public ResponseEntity<?> saveSeveralPay(@RequestBody Payements payements){
        System.out.println(payements.jourRecou.getDateRecou());
        return new ResponseEntity<>(payementService.savePlacetoPay(payements), HttpStatus.OK);
    }

    @PostMapping("liste/pay/place")
    public @ResponseBody ResponseEntity<?> getPaysByPlace(@RequestBody Place place){
        return new ResponseEntity<>(payementService.getPaysByPlace(place), HttpStatus.OK);
    }

    //liste des dates de recouvrement crés par marché
    @GetMapping("/liste/dat/payements/{id}")
    public @ResponseBody ResponseEntity<?> liste(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(payementService.fDteRecCreateByMarket(id), HttpStatus.OK);
    }


    @PutMapping("update/payement")
    public ResponseEntity<?> updatePayement(@RequestBody Place place, Date daterecou){
        return new ResponseEntity<>(payementService.updatePay(daterecou,place), HttpStatus.OK);
    }

    @GetMapping("/check/payement/{dateR}/{id}")
    public @ResponseBody ResponseEntity<?> checkedPay(@PathVariable(value = "id") long id,@PathVariable(value = "dateR") String dateR) throws Exception{
        Date madate= new SimpleDateFormat("yyyy-MM-dd").parse(dateR);
        System.out.println(madate);
        System.out.println(id);
        return new ResponseEntity<>(payementService.checkedPay(madate,id), HttpStatus.OK);
    }

    //paiement de ticket
    @GetMapping("/paiement/ticket/{dateR}/{id}")
    public @ResponseBody ResponseEntity<?> paieTicket(@PathVariable(value = "id") long id, @PathVariable(value = "dateR") String dateR) throws Exception{
        Date madate= new SimpleDateFormat("yyyy-MM-dd").parse(dateR);
        System.out.println("date"+madate);
        return new ResponseEntity<>(payementService.PayTicket(madate, id), HttpStatus.OK);
    }

    //les places en retard de paiement
    @GetMapping("/place/late/pay/{id}/{dateR}")
     public @ResponseBody ResponseEntity<?> placeNotPay(@PathVariable(value = "id") Long id, @PathVariable(value = "dateR") String dateR)throws Exception{
        Date madate= new SimpleDateFormat("yyyy-MM-dd").parse(dateR);
        return new ResponseEntity<>(payementService.nbreTotalOfPlaceInOverdue(id, madate), HttpStatus.OK);
     }

    //les places à jour de paiement
    @GetMapping("/place/up/pay/{id}/{dateR}")
    public @ResponseBody ResponseEntity<?> placePay(@PathVariable(value = "id") Long id, @PathVariable(value = "dateR") String dateR)throws Exception{
        Date madate= new SimpleDateFormat("yyyy-MM-dd").parse(dateR);
        return new ResponseEntity<>(payementService.nbreTotalOfPlaceUpInPay(id, madate), HttpStatus.OK);
    }

    //les paiements à jour d'une place donnée
    @PostMapping("/place/all/up/pay")
    public @ResponseBody ResponseEntity<?> findUpPayement(@RequestBody Place place){
        return new ResponseEntity<>(payementService.UpPayement(place), HttpStatus.OK);
    }
    //les retards de paiement d'une place donnée
    @PostMapping("/place/all/late/pay")
    public @ResponseBody ResponseEntity<?> findLatePayement(@RequestBody Place place){
        return new ResponseEntity<>(payementService.LatePayement(place), HttpStatus.OK);
    }

}
