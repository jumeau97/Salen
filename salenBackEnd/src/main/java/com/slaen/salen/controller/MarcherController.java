package com.slaen.salen.controller;

import com.slaen.salen.entity.Marcher;
import com.slaen.salen.repository.MarcherRepository;
import com.slaen.salen.service.MarcherService;
import com.slaen.salen.service.Saleninterface.MarcherInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/marcher")
public class MarcherController {

    @Autowired
    private MarcherInterface marcherInterface;
    @Autowired
    private MarcherService marcherService;

    public MarcherController(MarcherInterface marcherInterface) {
        this.marcherInterface = marcherInterface;
    }

    @PostMapping(value = "/addMarcher")
    public Marcher addMarcher(@RequestBody Marcher marcher) {
        return marcherInterface.addMarcher(marcher);
    }

    @GetMapping("/listeMarcher")
    public ResponseEntity<?> listeMarcher() {

        return new ResponseEntity<>(marcherService.listMarchers(), HttpStatus.OK);
    }

    @GetMapping("/listeById/{id}")
    public Marcher listeById(@PathVariable(name = "id") Long id) {
        return marcherInterface.listeById(id);
    }

    @PutMapping("/updateMarche/{id}")
    public Marcher updateMarcher(@PathVariable(name = "id") Long id, @RequestBody Marcher marcher) {
        marcher.setIdMarcher(id);
        return marcherInterface.UpdateMarcher(marcher);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable(name = "id") Long id) {
        marcherInterface.deleteMarcher(id);
    }

    @GetMapping("/listeMarcherMairie/{id}")
    public ResponseEntity<?> listeMarcherMairie(@PathVariable(name = "id") Long id) {

        return new ResponseEntity<>(marcherService.listMarcherByMairie(id), HttpStatus.OK);
    }

}
