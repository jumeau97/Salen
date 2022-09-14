package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.AffecterPlaceUtilisateur;
import com.slaen.salen.entity.Auth;
import com.slaen.salen.entity.Response;
import com.slaen.salen.entity.Utilisateur;
import com.slaen.salen.repository.UtilisateurRepository;
import com.slaen.salen.service.Saleninterface.UtilisateurInterface;
import org.springframework.stereotype.Service;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.Entity;

@Service
public class UtilisateurImp implements UtilisateurInterface {

    private UtilisateurRepository utilisateurRepository;

    public Response login(String login, String password) {
        Utilisateur user;
        try {
            user = utilisateurRepository.findByUsernameAndPassword(login, password);
            if (user == null) {
                return Response.error("Login ou mot de passe incorrect");
            }
        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(user, "Vous êtes authentifié avec succès");
    }

    public Response loginRecou(String login, String password, String profil) {
        Utilisateur user;
        try {
            user = utilisateurRepository.findByUsernameAndPasswordAndRole(login, password, profil);
            if (user == null) {
                return Response.error("Login ou mot de passe incorrect");
            }
        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(user, "Vous êtes authentifié avec succès");
    }



    public UtilisateurImp(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }





    @Override
    public Utilisateur addUtilisateur(Utilisateur utilisateur) {
        Utilisateur user = new Utilisateur(utilisateur.getNomUtilisateur(), utilisateur.getPrenomUtilisateur(),
                utilisateur.getAdresseUtilisateur(), utilisateur.getCodeUtilisateur(), utilisateur.getTelephoneUtilisateur(),
                utilisateur.getEmailUtilisateur(), utilisateur.getUsername(),utilisateur.getPassword(), utilisateur.getMairie(),
                 utilisateur.getRole());
        return utilisateurRepository.save(user);
    }

    @Override
    public List<Utilisateur> listeUtilisateur() {
        return utilisateurRepository.findAll();
    }

    @Override
    public Utilisateur listeById(long id) {
        return utilisateurRepository.findById(id).get();
    }

    @Override
    public Utilisateur UpdateUtilisateur(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public void deleteUtilisateur(long id) {
        utilisateurRepository.deleteById(id);
    }

}
