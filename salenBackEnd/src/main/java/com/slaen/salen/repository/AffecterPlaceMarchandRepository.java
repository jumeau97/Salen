package com.slaen.salen.repository;

import com.slaen.salen.entity.AffecterPlaceMarchand;
import com.slaen.salen.entity.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RepositoryRestResource
public interface AffecterPlaceMarchandRepository extends JpaRepository<AffecterPlaceMarchand ,Long> {

    //public Page<AffecterPlaceMarchand> listeAffecterMarchand(Pageable pageable);
    AffecterPlaceMarchand findByPlace(@Param(value = "place")Place place);

    @Query("SELECT aMM FROM AffecterPlaceMarchand aMM WHERE aMM.place.marcher.idMarcher = :idMarche")
    List<AffecterPlaceMarchand> findMarchandByMarcher(@Param(value = "idMarche") Long idMarche);

    @Query("SELECT p FROM AffecterPlaceMarchand p WHERE p.marchand.idMarchand=:id")
    List<AffecterPlaceMarchand> findPlaceByMarchand(@Param(value = "id") long id);



}
