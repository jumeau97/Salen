package com.slaen.salen.repository;

import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;

@RepositoryRestController
@CrossOrigin("*")
public interface PlaceRepository extends JpaRepository<Place , Long> {

    //public Page<Place> listePlaceByPage(Pageable pageable);
    Place findByNumeroPlace(int numero);

    @Query("from Place p where p.marcher.idMarcher=:id AND p.etatAR=0")
    public List<Place> findPlaceByIdMarcher(@Param(value="id") Long id);

    @Query("from Place p where p.marcher.idMarcher=:id AND p.etatAM=1")
    public List<Place> findPlaceByMarcherAM(@Param(value="id") Long id);

    @Query("from Place p where p.marcher.idMarcher=:id AND p.etatAM=0")
    public List<Place> findPlaceParMarcherM(@Param(value="id") Long id);

    @Query("from Place p where p.idPlace=:id")
    public Place findByIdPlace(Long id);

    //la liste des places par marcher simple
    @Query("from Place p where p.marcher.idMarcher=:id")
    public List<Place> findPlaceParMarcher(@Param(value="id") Long id);

    @Transactional
    @Modifying
    @Query("UPDATE Place p SET p.etatAR = true WHERE p.idPlace =:id")
    public void updateByIdPlace(@Param(value="id") Long id);

    @Transactional
    @Modifying
    @Query("UPDATE Place p SET p.etatAM = true WHERE p.idPlace =:id")
    public void updateEtatMByIdPlace(@Param(value="id") Long id);

    //change status to false for Trader
    @Transactional
    @Modifying
    @Query("UPDATE Place p SET p.etatAM = false WHERE p.idPlace = :id" )
    public void updateEtatAMTOFALSE(@Param(value = "id") long id);

}
