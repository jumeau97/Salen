package com.slaen.salen.service.Saleninterface;



import com.slaen.salen.entity.Commune;

import java.util.List;

public interface CommuneInterface {

    public Commune addCommune(Commune commune);
    public List<Commune> listeCommune();
    public Commune listeById(long id);
    public Commune UpdateCommune(Commune commune);
    public void deleteCommune(long id);
}
