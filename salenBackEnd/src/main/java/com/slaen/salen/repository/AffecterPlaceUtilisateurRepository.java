package com.slaen.salen.repository;

import com.slaen.salen.entity.AffecterPlaceUtilisateur;
import com.slaen.salen.entity.Place;
import com.slaen.salen.entity.Utilisateur;
import com.slaen.salen.entity.payload.MarcherPlace;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RepositoryRestResource
public interface AffecterPlaceUtilisateurRepository extends JpaRepository<AffecterPlaceUtilisateur , Long> {


   @Query("from AffecterPlaceUtilisateur a where a.utilisateur.idUtilisateur=:id")
   public List<AffecterPlaceUtilisateur> findMarketByIdRecouvreur(@Param(value="id") Long id);

   @Query("from AffecterPlaceUtilisateur a where a.utilisateur.idUtilisateur=:idUser and a.place.etatAM=true and a.place.etatAR=true and a.place.marcher.idMarcher=:idMarcher")
   public List<AffecterPlaceUtilisateur> findPlaceByUser(@Param(value = "idMarcher") Long idMarcher,@Param(value = "idUser") Long idUser);

//    @Query("select new com.slaen.salen.entity.payload.MarcherPlace(m,p) from com.slaen.salen.entity.AffecterPlaceUtilisateur a, com.slaen.salen.entity.Place p, com.slaen.salen.entity.Marcher m where a.utilisateur.idUtilisateur=:id and a.place.idPlace=p.numeroPlace and m.idMarcher = p.marcher.id group by m.libelleMarcher")
//    public List<MarcherPlace> findMarketByIdRecouvreur(@Param(value="id") Long id);

   @Query("SELECT aRM FROM AffecterPlaceUtilisateur aRM WHERE aRM.place.marcher.idMarcher = :id")
    List<AffecterPlaceUtilisateur> findRecouByMarche(@Param(value = "id") Long id);





}
