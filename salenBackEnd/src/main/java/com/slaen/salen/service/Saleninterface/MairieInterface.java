package com.slaen.salen.service.Saleninterface;



import com.slaen.salen.entity.Mairie;

import java.util.List;

public interface MairieInterface {

    public Mairie addMairie(Mairie mairie);
    public List<Mairie> listeMairie();
    public Mairie listeById(long id);
    public Mairie UpdateMairie( Mairie mairie);
    public void deleteMairie(long id);
}
