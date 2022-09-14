package com.slaen.salen.service.Saleninterface;



import com.slaen.salen.entity.Payement;

import java.util.List;

public interface PayementInterface {

    public Payement addPayement(Payement payement);
    public List<Payement> listePayement();
    public Payement listeById(long id);
    public Payement UpdatePayement(Payement payement);
    public void deletePayement(long id);

    // la gestion des payements


}
