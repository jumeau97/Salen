import { JourRecou } from "./jourRecou";
import { Place } from "./Place";

export  class Payement{
    place:Place[]=[];
    jourRecou?:JourRecou;
    MontantPayement?:number;
    resteApaye?:number;
}