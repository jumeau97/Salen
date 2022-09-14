package com.slaen.salen.moduleTD.AffRecouStruct;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AffRecouStructRepository extends JpaRepository<AffRecouStructure, Long> {
}
