import { JourRecou } from "./jourRecou";
import { Place } from "./Place";

export class Paiement {
    idPayement!:number;
    datepayement!:Date;
    montantPayement!:string;
    resteApaye!:string;
    place!:Place;
    jourRecou!:JourRecou


    
}