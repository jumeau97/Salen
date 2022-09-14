package com.slaen.salen.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;

@Entity
public class Utilisateur implements Serializable {
    private static String code = "Code :";
    private static long valeur = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUtilisateur;
    @Column(length = 50)
    @NotNull
    private String nomUtilisateur;
    @Column(length = 50)
    @NotNull
    private String prenomUtilisateur;
    @Column(length = 50)
    @NotNull
    private String adresseUtilisateur;
    @Column(length = 50)
    @NotNull
    private String codeUtilisateur;
    @Column(length = 50)
    @NotNull
    private String telephoneUtilisateur;
    @Column(length = 50)
    @NotNull
    private String emailUtilisateur;

    @NotNull
    @Column(length = 20)
    private String username;

    @NotNull
    @Column(length = 20)
    private String password;

    @ManyToOne
    private Mairie mairie;

    private String role;

    public Utilisateur() {
    }

    public Utilisateur(String nomUtilisateur, String prenomUtilisateur, String adresseUtilisateur, String codeUtilisateur, String telephoneUtilisateur, String emailUtilisateur, String username, String password, Mairie mairie, String role) {
        this.nomUtilisateur = nomUtilisateur;
        this.prenomUtilisateur = prenomUtilisateur;
        this.adresseUtilisateur = adresseUtilisateur;
        this.codeUtilisateur = codeUtilisateur;
        this.telephoneUtilisateur = telephoneUtilisateur;
        this.emailUtilisateur = emailUtilisateur;
        this.username = username;
        this.password = password;
        this.mairie = mairie;
        this.role = role;
    }

    public static String getCode() {
        return code;
    }

    public static void setCode(String code) {
        Utilisateur.code = code;
    }

    public static long getValeur() {
        return valeur;
    }

    public static void setValeur(long valeur) {
        Utilisateur.valeur = valeur;
    }

    public long getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(long idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    public String getNomUtilisateur() {
        return nomUtilisateur;
    }

    public void setNomUtilisateur(String nomUtilisateur) {
        this.nomUtilisateur = nomUtilisateur;
    }

    public String getPrenomUtilisateur() {
        return prenomUtilisateur;
    }

    public void setPrenomUtilisateur(String prenomUtilisateur) {
        this.prenomUtilisateur = prenomUtilisateur;
    }

    public String getAdresseUtilisateur() {
        return adresseUtilisateur;
    }

    public void setAdresseUtilisateur(String adresseUtilisateur) {
        this.adresseUtilisateur = adresseUtilisateur;
    }

    public String getCodeUtilisateur() {
        return codeUtilisateur;
    }

    public void setCodeUtilisateur(String codeUtilisateur) {
        this.codeUtilisateur = codeUtilisateur;
    }

    public String getTelephoneUtilisateur() {
        return telephoneUtilisateur;
    }

    public void setTelephoneUtilisateur(String telephoneUtilisateur) {
        this.telephoneUtilisateur = telephoneUtilisateur;
    }

    public String getEmailUtilisateur() {
        return emailUtilisateur;
    }

    public void setEmailUtilisateur(String emailUtilisateur) {
        this.emailUtilisateur = emailUtilisateur;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Mairie getMairie() {
        return mairie;
    }

    public void setMairie(Mairie mairie) {
        this.mairie = mairie;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
