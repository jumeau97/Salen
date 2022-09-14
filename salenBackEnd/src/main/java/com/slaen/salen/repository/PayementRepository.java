package com.slaen.salen.repository;

import com.slaen.salen.entity.JourRecou;
import com.slaen.salen.entity.Payement;
import com.slaen.salen.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public interface PayementRepository extends JpaRepository<Payement , Long> {

    //public Page<Payement> listePayementByPage(Pageable pageable);


    Optional<Payement> findByPlaceAndAndJourRecou(Place place, JourRecou jour);


    List<Payement> findByPlace(Place place);

    @Query("SELECT p FROM Payement p WHERE p.place=:place AND p.jourRecou.dateRecou=:daterecou")
    Payement findPayByPlaceAndJourRecou(@Param(value = "place") Place place, @Param(value = "daterecou")Date daterecou);

    //les dates de recouvrement crées par marché
    @Query("SELECT pymnt FROM Payement pymnt WHERE pymnt.place.marcher.idMarcher = :id ORDER BY pymnt.jourRecou.dateRecou DESC")
    List<Payement> findDatePayCreateByMarche(@Param(value = "id") Long id);

    //checked le paiement
    @Query("SELECT p FROM Payement p WHERE p.jourRecou.dateRecou= :dateRecou and p.place.idPlace=:id")
    List<Payement> findPayChecked(@Param(value = "dateRecou") Date dateRecou, @Param(value = "id") long id);

    //Modifier l'etat de paiement
//    @Transactional
//    @Modifying
//    @Query("UPDATE Payement p SET p.montantPayement=50, p.resteApaye=0 WHERE p.place.idPlace=:idPlace AND p.jourRecou.dateRecou=:dateRecou")
//    void updatePaieByDateAndPlace(@Param(value = "idPlace") long idPlace, @Param(value = "dateRecou") Date dateRecou);

    @Query("SELECT p FROM Payement p WHERE p.jourRecou.dateRecou= :dateRecou and p.place.idPlace=:id")
    Payement updatePaieByDateAndPlace(@Param(value = "dateRecou") Date dateRecou, @Param(value = "id") long id);

    //afficher les places (par marché) qui sont en retard de paiement à une date donnée
    @Query("SELECT pymnt FROM Payement pymnt WHERE pymnt.place.marcher.idMarcher = :id AND pymnt.jourRecou.dateRecou= :daterecou AND " +
            "pymnt.montantPayement=0")
    List<Payement> findPlaceNotPayByMarketAndDate(@Param(value = "id") Long id, @Param(value="daterecou") Date daterecou);

    //afficher les places (par marché) qui sont à jour de paiement à une date donnée
    @Query("SELECT pymnt FROM Payement pymnt WHERE pymnt.place.marcher.idMarcher = :id AND pymnt.jourRecou.dateRecou= :daterecou AND " +
            "pymnt.montantPayement=50")
    List<Payement> findPlacePayByMarketAndDate(@Param(value = "id") Long id, @Param(value="daterecou") Date daterecou);

    /**
     *
     * @param id
     * @param daterecou
     * @return
     */
    //afficher le nombre des places (par marché) qui sont en retard de paiement à une date donnée
    @Query("SELECT pymnt FROM Payement pymnt WHERE pymnt.place.marcher.idMarcher = :id AND pymnt.jourRecou.dateRecou= :daterecou AND " +
            "pymnt.montantPayement=0")
    List<Payement> nbrePlaceNotPayByMarketAndDate(@Param(value = "id") Long id, @Param(value="daterecou") Date daterecou);

    //afficher le nombre des places (par marché) qui sont à jour de paiement de paiement à une date donnée
    @Query("SELECT pymnt FROM Payement pymnt WHERE pymnt.place.marcher.idMarcher = :id AND pymnt.jourRecou.dateRecou= :daterecou AND " +
            "pymnt.montantPayement = 50")
    List<Payement> nbrePlaceUpPayByMarketAndDate(@Param(value = "id") Long id, @Param(value="daterecou") Date daterecou);

    //les retards de paiement par place
    @Query("SELECT pymnt FROM Payement  pymnt WHERE pymnt.montantPayement =0 AND pymnt.place = :place")
    List<Payement> findLatePay(@Param(value = "place") Place place);

    //les paiements à jour par place
    @Query("SELECT pymnt FROM Payement  pymnt WHERE pymnt.montantPayement =50 AND pymnt.place = :place")
    List<Payement> findUpPay(@Param(value = "place") Place place);
}
