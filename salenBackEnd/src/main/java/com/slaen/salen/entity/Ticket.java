package com.slaen.salen.entity;

import javax.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private boolean reserve;
    @ManyToOne
    private JourRecou jourRecou;
    @ManyToOne
    private AffecterPlaceMarchand affecterPlaceMarchand;

    public Ticket() {
    }

    public Ticket(long id, boolean reserve, JourRecou jourRecou, AffecterPlaceMarchand affecterPlaceMarchand) {
        this.id = id;
        this.reserve = reserve;
        this.jourRecou = jourRecou;
        this.affecterPlaceMarchand = affecterPlaceMarchand;
    }

    public long getId() {
        return id;
    }

    public boolean isReserve() {
        return reserve;
    }

    public JourRecou getJourRecou() {
        return jourRecou;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setReserve(boolean reserve) {
        this.reserve = reserve;
    }

    public void setJourRecou(JourRecou jourRecou) {
        this.jourRecou = jourRecou;
    }

    public AffecterPlaceMarchand getAffecterPlaceMarchand() {
        return affecterPlaceMarchand;
    }

    public void setAffecterPlaceMarchand(AffecterPlaceMarchand affecterPlaceMarchand) {
        this.affecterPlaceMarchand = affecterPlaceMarchand;
    }
}
