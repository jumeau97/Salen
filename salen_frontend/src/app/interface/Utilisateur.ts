import { Mairie } from "./Mairie";


export interface Utilisateur {
    id : number;
    adresse : string;
    code : string;
    email : string;
    nom : string;
    prenom : string;
    password : string;
    role : string;
    tel : string;
    userName : string;
    mairie : Mairie;
}