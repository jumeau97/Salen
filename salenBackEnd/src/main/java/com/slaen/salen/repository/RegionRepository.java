package com.slaen.salen.repository;

import com.slaen.salen.entity.Region;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;



public interface RegionRepository extends JpaRepository<Region , Long> {

    //public Page<Region> listeRegionByPage(Pageable pageable);


}
