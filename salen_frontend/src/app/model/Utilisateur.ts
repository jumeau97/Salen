import { Mairie } from "./Mairie";

export interface Utilisateur{
    idUtilisateur?:number;
    adresseUtilisateur?:string;
    codeUtilisateur?:string;
    emailUtilisateur?:string;
    nomUtilisateur?:string;
    password?:string;
    prenomUtilisateur?:string;
    role?:string;
    telephoneUtilisateur?:string;
    username?:string;
    mairie?:Mairie;
}