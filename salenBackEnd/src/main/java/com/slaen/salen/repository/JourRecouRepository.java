package com.slaen.salen.repository;

import com.slaen.salen.entity.JourRecou;
import com.slaen.salen.entity.Mairie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;

@RepositoryRestResource
public interface JourRecouRepository extends JpaRepository<JourRecou, Long> {

    JourRecou findByDateRecou(@Param(value = "mydate") Date mydate);
}
