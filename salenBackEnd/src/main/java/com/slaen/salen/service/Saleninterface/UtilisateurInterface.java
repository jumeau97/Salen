package com.slaen.salen.service.Saleninterface;

import com.slaen.salen.entity.Utilisateur;

import java.util.List;
import java.util.Optional;

public interface UtilisateurInterface {

    public Utilisateur addUtilisateur(Utilisateur utilisateur);

    public List<Utilisateur> listeUtilisateur();

    public Utilisateur listeById(long id);

    public Utilisateur UpdateUtilisateur(Utilisateur utilisateur);
    public void deleteUtilisateur(long id);


}
