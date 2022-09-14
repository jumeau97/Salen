package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.Mairie;
import com.slaen.salen.repository.MairieRepository;
import com.slaen.salen.service.Saleninterface.MairieInterface;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MairieImp implements MairieInterface {

    private MairieRepository mairieRepository;

    public MairieImp(MairieRepository mairieRepository) {
        this.mairieRepository = mairieRepository;
    }

    @Override
    public Mairie addMairie(Mairie mairie) {
        return mairieRepository.save(mairie);
    }

    @Override
    public List<Mairie> listeMairie() {
        return mairieRepository.findAll();
    }

    @Override
    public Mairie listeById(long id) {
        return mairieRepository.findById(id).get();
    }

    @Override
    public Mairie UpdateMairie(Mairie mairie) {
        return mairieRepository.save(mairie);
    }

    @Override
    public void deleteMairie(long id) {
        mairieRepository.deleteById(id);
    }
}
