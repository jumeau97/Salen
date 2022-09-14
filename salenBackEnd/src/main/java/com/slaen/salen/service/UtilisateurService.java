package com.slaen.salen.service;

import com.slaen.salen.entity.Mairie;
import com.slaen.salen.entity.Response;
import com.slaen.salen.entity.Utilisateur;
import com.slaen.salen.entity.role;
import com.slaen.salen.repository.UtilisateurRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
     UtilisateurRepository utilisateurRepository;
    public Response listUserByRole(String role) {
        List<Utilisateur> a = new ArrayList<>();
        try {

            a = utilisateurRepository.findUtilisateurByRole(role);

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des places retrouvées avec succès");
    }


//All user
    public Response AllUser(){
        List<Utilisateur> a= utilisateurRepository.findAll();
        try{
            if(a==null){
                return Response.error("contenu vide");
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est suvenue");
        }
        return Response.with(a,"Liste retrouvée");
    }

    //UserByroleAndMairie
    public Response UserByRoleAndMairie(String role, long mairie){
        List<Utilisateur> a= utilisateurRepository.findAllByRoleAndMairie(role, mairie);
        try{
            if(a==null){
                return Response.error("contenu vide");
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est suvenue");
        }
        return Response.with(a,"Liste retrouvée");
    }


    //Modifier un utilisateur
    public Response updateUser(Utilisateur user){
          Utilisateur  u= utilisateurRepository.getById(user.getIdUtilisateur());
        try{
            if(u!=null){
                u.setNomUtilisateur(user.getNomUtilisateur());
                u.setPrenomUtilisateur(user.getPrenomUtilisateur());
                u.setAdresseUtilisateur(user.getAdresseUtilisateur());
                u.setEmailUtilisateur(user.getEmailUtilisateur());
                u.setMairie(user.getMairie());
                u.setPassword(user.getPassword());
                u.setRole(user.getRole());
                u.setTelephoneUtilisateur(user.getTelephoneUtilisateur());
                utilisateurRepository.save(u);
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est suvenue");
        }
        return Response.success("Mise à jour effectuée avec succès");
    }

    //find userByid
    public Response UserById(long id){
        Optional <Utilisateur> a= utilisateurRepository.findById(id);
        try{
            if(a==null){
                return Response.error("contenu vide");
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est suvenue");
        }
        return Response.with(a,"user retrouvée");
    }


}
