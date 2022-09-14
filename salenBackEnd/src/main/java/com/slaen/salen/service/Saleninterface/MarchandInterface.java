package com.slaen.salen.service.Saleninterface;



import com.slaen.salen.entity.Marchand;

import java.util.List;

public interface MarchandInterface {

    public Marchand addMarchand(Marchand marchand);
    public List<Marchand> listeMarchand();
    public Marchand listeById(long id);
    public Marchand UpdateMarcher(Marchand marchand);
    public void deleteMarchand(long id);
}
