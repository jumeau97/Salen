package com.slaen.salen.service.Saleninterface;

import com.slaen.salen.entity.Marcher;
import com.slaen.salen.entity.Payement;

import java.util.List;

public interface MarcherInterface {

    public Marcher addMarcher(Marcher marcher);
    public List<Marcher> listeMarcher();
    public Marcher listeById(long id);
    public Marcher UpdateMarcher(Marcher marcher);
    public void deleteMarcher(long id);
}
