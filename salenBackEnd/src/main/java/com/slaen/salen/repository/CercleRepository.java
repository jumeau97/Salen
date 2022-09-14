package com.slaen.salen.repository;

import com.slaen.salen.entity.Cercle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;


public interface CercleRepository extends JpaRepository<Cercle , Long> {

    //public Page<Cercle> listeCercleByPage(Pageable pageable);
}
