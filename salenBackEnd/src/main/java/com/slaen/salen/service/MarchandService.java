package com.slaen.salen.service;

import com.slaen.salen.entity.Marchand;
import com.slaen.salen.entity.Response;
import com.slaen.salen.repository.MarchandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MarchandService {

    @Autowired
    MarchandRepository marchandRepository;

    public Response listMarchands() {
        List<Marchand> a = new ArrayList<>();
        try {

            a = marchandRepository.findAll();

        } catch (Exception e) {
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue lors de l'opération");
        }
        return Response.with(a, "Liste des marchés retrouvées avec succès");
    }
}
