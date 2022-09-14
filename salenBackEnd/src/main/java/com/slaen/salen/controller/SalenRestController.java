package com.slaen.salen.controller;

import com.slaen.salen.entity.Marchand;
import com.slaen.salen.entity.Ticket;
import com.slaen.salen.repository.MarchandRepository;
import com.slaen.salen.repository.TicketRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
public class SalenRestController {

    @Autowired
    private TicketRepository ticketRepository;
    @PostMapping("/PayerTicket")
    @Transactional
    public List<Ticket> payerTicket(@RequestBody TicketFrom ticketFrom){
        List<Ticket> listeTickets=new ArrayList<>();
        ticketFrom.getTickets().forEach(idTicket ->{
            Ticket ticket= ticketRepository.findById(idTicket).get();
            ticket.setReserve(true);
            ticketRepository.save(ticket);
            listeTickets.add(ticket);
        });
        return listeTickets;
    }


}
class TicketFrom{
    private List<Long> tickets=new ArrayList<>();

    public TicketFrom() {
    }

    public TicketFrom(List<Long> tickets) {
        this.tickets = tickets;
    }

    public List<Long> getTickets() {
        return tickets;
    }

    public void setTickets(List<Long> tickets) {
        this.tickets = tickets;
    }
}
