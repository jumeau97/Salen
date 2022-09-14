package com.slaen.salen.controller;

import com.slaen.salen.entity.Cercle;
import com.slaen.salen.entity.Region;
import com.slaen.salen.repository.RegionRepository;
import com.slaen.salen.service.Saleninterface.CercleInterface;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cercle")
public class CercleController {

    private CercleInterface cercleInterface;
    private RegionRepository regionRepository;

    public CercleController(CercleInterface cercleInterface, RegionRepository regionRepository) {
        this.cercleInterface = cercleInterface;
        this.regionRepository = regionRepository;
    }

    @PostMapping(value = "/addCercle")
    public Cercle addCercle(@RequestBody Cercle cercle){
        return cercleInterface.addCercle(cercle);
    }

    @GetMapping("/listeCercle")
    public List<Cercle> listeCercle(){
        return cercleInterface.listeCercle();
    }

    @GetMapping("/listeById/{id}")
    public  Cercle listeById(@PathVariable(name = "id") Long id){
        return cercleInterface.listeById(id);
    }

    @PutMapping("/updateCercle/{id}")
    public Cercle updateCercle(@PathVariable(name = "id") Long id ,@RequestBody Cercle cercle){
        cercle.setIdCercle(id);
        return cercleInterface.UpdateCercle(cercle);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable(name = "id") Long id){
        cercleInterface.deleteCercle(id);
    }
}
