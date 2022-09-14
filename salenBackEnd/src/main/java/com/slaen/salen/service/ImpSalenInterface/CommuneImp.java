package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.Commune;
import com.slaen.salen.repository.CommuneRepository;
import com.slaen.salen.service.Saleninterface.CommuneInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommuneImp implements CommuneInterface {

    private CommuneRepository communeRepository;

    public CommuneImp(CommuneRepository communeRepository) {
        this.communeRepository = communeRepository;
    }

    @Override
    public Commune addCommune(Commune commune) {
        return communeRepository.save(commune);
    }

    @Override
    public List<Commune> listeCommune() {
        return communeRepository.findAll();
    }

    @Override
    public Commune listeById(long id) {
        return communeRepository.findById(id).get();
    }

    @Override
    public Commune UpdateCommune(Commune commune) {
        return communeRepository.save(commune);
    }

    @Override
    public void deleteCommune(long id) {
        communeRepository.deleteById(id);
    }
}
