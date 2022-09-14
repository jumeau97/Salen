package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.AffecterPlaceMarchand;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;
import com.slaen.salen.repository.AffecterPlaceMarchandRepository;
import com.slaen.salen.repository.PlaceRepository;
import com.slaen.salen.repository.UtilisateurRepository;
import com.slaen.salen.service.Saleninterface.AffecterPlaceMarchandInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AffecterPlaceMarchandImp implements AffecterPlaceMarchandInterface {

    private AffecterPlaceMarchandRepository affecterPlaceMarchandRepository;


    public AffecterPlaceMarchandImp(AffecterPlaceMarchandRepository marchandRepository,
                                    UtilisateurRepository utilisateurRepository, PlaceRepository placeRepository) {
        this.affecterPlaceMarchandRepository = marchandRepository;
    }

    @Override
    public AffecterPlaceMarchand addAffecterPlaceMarchand(AffecterPlaceMarchand affecterPlaceMarchand) {
        return affecterPlaceMarchandRepository.save(affecterPlaceMarchand);
    }

    @Override
    public List<AffecterPlaceMarchand> listeAffecterPlaceMarchand() {
        return affecterPlaceMarchandRepository.findAll();
    }

    @Override
    public AffecterPlaceMarchand listeById(long id) {
        return affecterPlaceMarchandRepository.findById(id).get();
    }

    @Override
    public AffecterPlaceMarchand UpdateAffecterPlaceMarchand(long id, AffecterPlaceMarchand affecterPlaceMarchand) {
        affecterPlaceMarchand.setIdAffecterPlaceMarchand(id);
        return affecterPlaceMarchandRepository.save(affecterPlaceMarchand);
    }

    @Override
    public void deleteAffecterPlaceMarchand(long id) {
        affecterPlaceMarchandRepository.deleteById(id);
    }


}
