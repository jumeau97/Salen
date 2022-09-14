package com.slaen.salen.service.Saleninterface;



import com.slaen.salen.entity.AffecterPlaceUtilisateur;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;

import java.util.List;

public interface AffecterPlaceUtilisateurInterface {

    public AffecterPlaceUtilisateur addAffecterPlaceUtilisateur(AffecterPlaceUtilisateur affecterPlaceUtilisateur);
    public List<AffecterPlaceUtilisateur> listeAffecterPlaceUtilisateur();
    public AffecterPlaceUtilisateur listeById(long id);
    public AffecterPlaceUtilisateur UpdateAffecterPlaceUtilisateur(long id , AffecterPlaceUtilisateur affecterPlaceUtilisateur);
    public void deleteAffecterPlaceUtilisateur(long id);

    public void AffecterPlaceToUtilisateur(Utilisateur utilisateur , Place place);

}
