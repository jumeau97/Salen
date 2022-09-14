package com.slaen.salen.controller;

import com.slaen.salen.entity.Commune;
import com.slaen.salen.service.Saleninterface.CommuneInterface;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/commune")

public class CommuneController {

    private CommuneInterface communeInterface;

    public CommuneController(CommuneInterface communeInterface) {
        this.communeInterface = communeInterface;
    }

    @PostMapping(value = "/addCommune")
    public Commune addCommune(@RequestBody Commune commune) {
        return communeInterface.addCommune(commune);
    }

    @GetMapping("/listeCommune")
    public List<Commune> listeCommune() {
        return communeInterface.listeCommune();
    }

    @GetMapping("/listeById/{id}")
    public Commune listeById(@PathVariable(name = "id") Long id) {
        return communeInterface.listeById(id);
    }

    @PutMapping("/updateCommune/{id}")
    public Commune updateCercle(@PathVariable(name = "id") Long id, @RequestBody Commune commune) {
        commune.setIdCommune(id);
        return communeInterface.UpdateCommune(commune);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable(name = "id") Long id) {
        communeInterface.deleteCommune(id);
    }
}
