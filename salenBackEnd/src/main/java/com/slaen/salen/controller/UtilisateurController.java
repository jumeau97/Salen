package com.slaen.salen.controller;

import com.slaen.salen.entity.Auth;
import com.slaen.salen.entity.Response;
import com.slaen.salen.entity.Utilisateur;
import com.slaen.salen.repository.UtilisateurRepository;
import com.slaen.salen.service.ImpSalenInterface.UtilisateurImp;
import com.slaen.salen.service.Saleninterface.UtilisateurInterface;

import com.slaen.salen.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/utilisateur")
public class UtilisateurController {

    @Autowired
    private UtilisateurInterface utilisateurInterface;
    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    private UtilisateurImp imp;
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public UtilisateurController(UtilisateurInterface utilisateurInterface) {
        this.utilisateurInterface = utilisateurInterface;
    }

    @PostMapping("/auth")
    public ResponseEntity<?> login(@RequestBody Auth utilisateur) {
        return new ResponseEntity<>(imp.login(utilisateur.getUsername(), utilisateur.getPassword()), HttpStatus.OK);
    }

    @PostMapping("/authRecou")
    public ResponseEntity<?> loginRecou(@RequestBody Auth utilisateur) {
        return new ResponseEntity<>(imp.loginRecou(utilisateur.getUsername(), utilisateur.getPassword(),"recouvreur"), HttpStatus.OK);
    }
    // @PostMapping("/auth")
    // public ResponseEntity<?> login(@RequestBody Auth utilisateur) {
    // System.out.println(utilisateur.getUsername());
    // // Utilisateur user;
    // // try {
    // // System.out.println(utilisateur.getUsername());
    // // System.out.println(utilisateur.getPassword());
    // // user =
    // utilisateurRepository.findByUsernameAndPassword(utilisateur.getUsername(),
    // // utilisateur.getPassword());
    // // if (user == null) {
    // // return ResponseEntity.ok("User n'existe pas ");
    // // // return "Login ou mot de passe incorrect";
    // // }
    // // // user = user1;
    // // } catch (Exception e) {
    // // e.printStackTrace(System.out);
    // // // return "Une erreur est survenue lors de l'opération";
    // // }
    // return ResponseEntity.ok("ok");
    // // return imp.login(utilisateur.getUsername(), utilisateur.getPassword());
    // }

    @GetMapping(value = "/listeUtilisateur")
    public List<Utilisateur> listeUtilisateur() {
        return utilisateurInterface.listeUtilisateur();
    }

    @PostMapping(value = "/addUtilisateur")
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) {
        return utilisateurInterface.addUtilisateur(utilisateur);
    }

    @GetMapping(value = "/listeById/{id}")
    public Utilisateur ListeById(@PathVariable(name = "id") long id) {
        return utilisateurInterface.listeById(id);
    }

    @PutMapping(value = "/updateUtilisateur/{id}")
    public Utilisateur updateUtilisateur(@PathVariable(name = "id") Long id, @RequestBody Utilisateur utilisateur) {
        utilisateur.setIdUtilisateur(id);
        return utilisateurInterface.UpdateUtilisateur(utilisateur);
    }

    @DeleteMapping(value = "deleteById/{id}")
    public void deleteById(@PathVariable(name = "id") Long id) {
        utilisateurInterface.deleteUtilisateur(id);
    }

    @GetMapping("/listeUserRole/{role}")
    public ResponseEntity<?> listeUserRole(@PathVariable(name="role") String role) {

        return new ResponseEntity<>(utilisateurService.listUserByRole(role), HttpStatus.OK);
    }

    //Nouvelle method de toute les liste
    @GetMapping("/allUser")
    public @ResponseBody ResponseEntity<?> listeUser(){
        return new ResponseEntity<>(utilisateurService.AllUser(), HttpStatus.OK);
    }

    //Nouvelle method de toute les liste
    @GetMapping("/listeUser/{role}/{mairie}")
    public @ResponseBody ResponseEntity<?> listeUser(@PathVariable(value = "role") String role, @PathVariable(value = "mairie") long mairie){
        return new ResponseEntity<>(utilisateurService.UserByRoleAndMairie(role, mairie), HttpStatus.OK);
    }

    //new update user
    @PostMapping("/update/user")
    public @ResponseBody ResponseEntity<?> updateUser(@RequestBody Utilisateur user){
        return new ResponseEntity<>(utilisateurService.updateUser(user), HttpStatus.OK);
    }

    @GetMapping("userById/{id}")
        public @ResponseBody ResponseEntity<?> userById(@PathVariable(value = "id") long id){
            return new ResponseEntity<>(utilisateurService.UserById(id), HttpStatus.OK);

    }
}
