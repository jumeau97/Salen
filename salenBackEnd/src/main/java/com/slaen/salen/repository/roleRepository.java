package com.slaen.salen.repository;

import com.slaen.salen.entity.role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface roleRepository extends JpaRepository<role, Long> {

}
