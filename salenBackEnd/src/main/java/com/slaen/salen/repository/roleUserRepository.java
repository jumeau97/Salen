package com.slaen.salen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.slaen.salen.entity.roleUser;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface roleUserRepository extends JpaRepository<roleUser, Long> {

}
