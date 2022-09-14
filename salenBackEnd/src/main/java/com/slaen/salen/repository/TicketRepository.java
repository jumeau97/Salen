package com.slaen.salen.repository;

import com.slaen.salen.entity.Mairie;
import com.slaen.salen.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface TicketRepository extends JpaRepository<Ticket, Long> {

}
