package com.slaen.salen.repository;

import com.slaen.salen.entity.Mairie;
import com.slaen.salen.entity.Marcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RepositoryRestController
@CrossOrigin("*")
public interface MarcherRepository extends JpaRepository<Marcher , Long> {

    //public Page<Marcher>  listeMaecherByPage(Pageable pageable);

    @Query("from Marcher m where m.mairie.idMairie=:id")
    public List<Marcher> findMarcherByMairieACtif(@Param(value="id") Long id);

//    public List<Marcher> findAll();
}
