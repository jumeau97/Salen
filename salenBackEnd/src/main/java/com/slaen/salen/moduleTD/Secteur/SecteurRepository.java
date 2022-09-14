package com.slaen.salen.moduleTD.Secteur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SecteurRepository extends JpaRepository<Secteur, Long> {
}
