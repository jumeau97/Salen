package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

@Entity
public class JourRecou implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @Temporal(TemporalType.DATE)
    private Date dateRecou;


    public JourRecou() {
    }

    public JourRecou(Date dateRecou) {
        this.dateRecou = dateRecou;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDateRecou() {
        return dateRecou;
    }

    public void setDateRecou(Date dateRecou) {
        this.dateRecou = dateRecou;
    }
}
