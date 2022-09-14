package com.slaen.salen.service.Saleninterface;



import com.slaen.salen.entity.AffecterPlaceMarchand;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;

import java.util.List;

public interface AffecterPlaceMarchandInterface {

    public AffecterPlaceMarchand addAffecterPlaceMarchand(AffecterPlaceMarchand affecterPlaceMarchand);
    public List<AffecterPlaceMarchand> listeAffecterPlaceMarchand();
    public AffecterPlaceMarchand listeById(long id);
    public AffecterPlaceMarchand UpdateAffecterPlaceMarchand(long id , AffecterPlaceMarchand affecterPlaceMarchand);
    public void deleteAffecterPlaceMarchand(long id);


}
