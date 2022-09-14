package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.Cercle;
import com.slaen.salen.repository.CercleRepository;
import com.slaen.salen.service.Saleninterface.CercleInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CercleImp implements CercleInterface {

    private CercleRepository cercleRepository;

    public CercleImp(CercleRepository cercleRepository) {
        this.cercleRepository = cercleRepository;
    }

    @Override
    public Cercle addCercle(Cercle cercle) {
        return cercleRepository.save(cercle);
    }

    @Override
    public List<Cercle> listeCercle() {
        return cercleRepository.findAll();
    }

    @Override
    public Cercle listeById(long id) {
        return cercleRepository.findById(id).get();
    }

    @Override
    public Cercle UpdateCercle(Cercle cercle) {
        return cercleRepository.save(cercle);
    }

    @Override
    public void deleteCercle(long id) {
        cercleRepository.deleteById(id);
    }
}
