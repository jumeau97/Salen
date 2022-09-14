package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.AffecterPlaceMarchand;
import com.slaen.salen.entity.JourRecou;
import com.slaen.salen.entity.Ticket;
import com.slaen.salen.repository.*;
import com.slaen.salen.service.Saleninterface.InterfaceInitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.stream.Stream;

@Service
@Transactional
public class ImplInitService implements InterfaceInitService {
    @Autowired
    private AffecterPlaceMarchandRepository affecterPlaceMarchandRepository;
    @Autowired
    private JourRecouRepository jourRecouRepository;
    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private MarcherRepository marcherRepository;
    @Autowired
    private PlaceRepository placeRepository;
    @Autowired
    private MarchandRepository marchandRepository;


//    @Override
//    public void initAffectationMP() {
//        marcherRepository.findAll().forEach(marcher -> {
//            marcher.getPlaces().forEach(place ->{
//                marchandRepository.findAll().forEach(marchand -> {
//                    AffecterPlaceMarchand affecterPM= new AffecterPlaceMarchand();
//                    affecterPM.setMarchand(marchand);
//                    affecterPM.setPlace(place);
//                    affecterPM.setDateAffecterPlaceMarchand(new Date());
//                   affecterPlaceMarchandRepository.save(affecterPM);
//                });
//            } );
//        });
//
//    }

    @Override
    public void initJour() {
        DateFormat dateFormat= new SimpleDateFormat("dd/MM/yyyy");
        Stream.of("16/01/2022", "17/01/2022", "18/01/2022", "19/01/2022", "20/01/2022", "21/01/2022", "22/01/2022", "23/01/2022", "24/01/2022", "25/01/2022")
                .forEach(j ->{
                    JourRecou jour= new JourRecou();
                    try {
                        jour.setDateRecou(dateFormat.parse(j));
                        jourRecouRepository.save(jour);
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }

                });

    }

    @Override
    public void initTicket() {
    affecterPlaceMarchandRepository.findAll().forEach(affecter -> {
        jourRecouRepository.findAll().forEach(jour -> {
            Ticket ticket=new Ticket();
            ticket.setAffecterPlaceMarchand(affecter);
            ticket.setJourRecou(jour);
            ticket.setReserve(false);
            ticketRepository.save(ticket);
        });
    });
    }
}
