package com.slaen.salen.service;

import com.slaen.salen.entity.Mairie;
import com.slaen.salen.entity.Response;
import com.slaen.salen.repository.MairieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MairieService {
    @Autowired
    MairieRepository mairieRepository;

    public Response AllMairie(){
        List<Mairie> listMairie= new ArrayList<>();


        try{
            listMairie=mairieRepository.findAll();
            if(listMairie==null){
                return Response.error("donnée non trouvée");
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenu");
        }
        return Response.with(listMairie,"Liste retournée avec success");
    }
}
