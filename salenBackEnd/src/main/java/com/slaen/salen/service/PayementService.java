package com.slaen.salen.service;

import com.slaen.salen.entity.Payement;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Response;
import com.slaen.salen.entity.payload.Payements;
import com.slaen.salen.repository.PayementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PayementService {
    @Autowired
    PayementRepository payementRepository;
    public Response savePaiement(Payement paiement){

        try{
            paiement.setDatePayement(new Date());
            Payement paie= payementRepository.save(paiement);
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenu");

        }
        return Response.success("Insertion reussie");
    }

    //insertion d'une liste de place dans paiement
    public Response savePlacetoPay(Payements payements){
        //List<Payement>


        try{
            for(Place place:payements.getPlace()){
              Optional<Payement> p=  payementRepository.findByPlaceAndAndJourRecou(place,payements.getJourRecou());
                if(!p.isPresent()){
                    Payement paie= new Payement();
                    paie.setPlace(place);
                    paie.setDatePayement(new Date());
                    paie.setJourRecou(payements.getJourRecou());
                    paie.setMontantPayement(payements.getMontantPayement());
                    paie.setResteApaye(payements.getResteApaye());

                    payementRepository.save(paie);
                };

            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est surbenu");

        }
        return Response.success("Insertion reussie");
    }


    public Response getPaysByPlace(Place place){
        List<Payement> listpay = new ArrayList<>();
        listpay=payementRepository.findByPlace(place);

        try{
            if(listpay==null){
                return Response.error("paiement non trouvée");
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
        }
        return Response.with(listpay,"La liste des paiement retournés avec succès");
    }

    //Modification

    public Response updatePay(Date daterecou, Place place){

        try{
            Payement paie= payementRepository.findPayByPlaceAndJourRecou(place,daterecou);
            System.out.println("recuperer");
            paie.setMontantPayement(50);
            paie.setResteApaye(0);
            payementRepository.save(paie);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.success("Modifier avec succès");
    }

    //la liste des dates de paiement crées par marché

    public Response fDteRecCreateByMarket(Long id){
        List<Payement> ldte = new ArrayList<>();

        try{
            ldte=payementRepository.findDatePayCreateByMarche(id);

        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("Une erreur est survenue");
        }

        return Response.with(ldte,"la liste retournée avec succès");
    }


    public Response checkedPay(Date dateRecou, long id){
        List<Payement> paie= new ArrayList<>();
        paie= payementRepository.findPayChecked(dateRecou, id);

        try{
            if(paie==null){
                return  Response.with(paie, "vide");
            }
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur");
        }
        return Response.with(paie,"reussi");
    }


    //Modifier le paiement par ticket et place
    public Response PayTicket(Date dateRecou, long id){
       Payement paie=payementRepository.updatePaieByDateAndPlace(dateRecou, id);
        try{
            if(paie!=null){
                paie.setMontantPayement(50);
                paie.setResteApaye(0);
                payementRepository.saveAndFlush(paie);
            }

        }catch (Exception e){
            e.printStackTrace(System.out);
            return  Response.error("Une erreur est survenue");

        }

        return Response.success("paiement reussie");
    }

    //afficher le nombre des places (par marché) qui sont en retard de paiement à une date donnée
    public Response nbreTotalOfPlaceInOverdue(Long id, Date dateRec){
        List<Payement> pay = new ArrayList<>();

        try{

            pay = payementRepository.nbrePlaceNotPayByMarketAndDate(id, dateRec);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur eest survenue lors de l'opération");
        }

        return Response.with(pay, "liste retournée");


    }

    //afficher le nombre des places (par marché) qui sont à jour de paiement à une date donnée
    public Response nbreTotalOfPlaceUpInPay(Long id, Date dateRec){
        List<Payement> pay = new ArrayList<>();

        try{


            pay = payementRepository.nbrePlaceUpPayByMarketAndDate(id, dateRec);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur eest survenue lors de l'opération");
        }

        return Response.with(pay, "liste retournée");


    }

    //les paiements à jour d'une place donnée
    public Response UpPayement(Place place){
        List<Payement> pay = new ArrayList<>();
        try{
            pay = payementRepository.findUpPay(place);
        }catch(Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with(pay, "liste retournée");
    }

    //les retards de paiment d'une place donnée
    public Response LatePayement(Place place){
        List<Payement> pay = new ArrayList<>();
        try{
            pay = payementRepository.findLatePay(place);
        }catch (Exception e){
            e.printStackTrace(System.out);
            return Response.error("une erreur est survenue");
        }
        return Response.with(pay, "liste retournée");
    }
}
