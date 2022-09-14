package com.slaen.salen.controller;

import com.slaen.salen.entity.Marchand;
import com.slaen.salen.service.MarchandService;
import com.slaen.salen.service.Saleninterface.MarchandInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/marchand")
public class MarchandController {

    @Autowired
    private MarchandService marchandService;
    @Autowired
    private MarchandInterface marchandInterface;

    public MarchandController(MarchandInterface marchandInterface) {
        this.marchandInterface = marchandInterface;
    }

    @PostMapping(value = "/addMarchand")
    public Marchand addMarhand(@RequestBody Marchand marchand) {
        return marchandInterface.addMarchand(marchand);
    }

    @GetMapping("/listeMarchands")
    public ResponseEntity<?> listeMarchands() {

        return new ResponseEntity<>(marchandService.listMarchands(), HttpStatus.OK);
    }

    @GetMapping("/listeById/{id}")
    public Marchand listeById(@PathVariable(name = "id") Long id) {
        return marchandInterface.listeById(id);
    }

    @PutMapping("/updateMarchand/{id}")
    public Marchand updateMarhand(@PathVariable(name = "id") Long id, @RequestBody Marchand marchand) {
        marchand.setIdMarchand(id);
        return marchandInterface.UpdateMarcher(marchand);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable(name = "id") Long id) {
        marchandInterface.deleteMarchand(id);
    }
}
