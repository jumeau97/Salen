package com.slaen.salen.service;

import com.slaen.salen.entity.JourRecou;
import com.slaen.salen.entity.Response;
import com.slaen.salen.repository.JourRecouRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class JourRecouService {

    @Autowired
    JourRecouRepository jourRecouRepository;

    public Response findDayByDate(Date myDate){
        JourRecou jr;


       try{
           jr=jourRecouRepository.findByDateRecou(myDate);
           if(jr==null){
                return  Response.error("donnée non trouvée");
           }
       }catch(Exception e){
           e.printStackTrace(System.out);
           return Response.error("une erreur s'est produite");
       }
       return Response.with(jr,"date trouvée");
    }

    //liste de tous les jour recouv
    public Response findAllDaysRe(){
        List<JourRecou> jours= new ArrayList<>();


        try{
            jours=jourRecouRepository.findAll();
            if(jours==null){
                return  Response.error("donnée non trouvée");
            }
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur s'est produite");
        }
        return Response.with(jours,"date trouvée");
    }

}
