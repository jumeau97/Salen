package com.slaen.salen.service;

import com.slaen.salen.entity.Marcher;
import com.slaen.salen.entity.Response;
import com.slaen.salen.repository.MarcherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MarcherService {

@Autowired
    MarcherRepository marcherRepository;

    public Response listMarcherByMairie(Long id) {
        List<Marcher> a = new ArrayList<>();
        try {

            a = marcherRepository.findMarcherByMairieACtif(id);

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des marchés retrouvées avec succès");
    }


    public Response listMarchers() {
        List<Marcher> a = new ArrayList<>();
        try {

            a = marcherRepository.findAll();

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des marchés retrouvées avec succès");
    }
}
