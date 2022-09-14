import { Commune } from "./Commune";

export interface Mairie {
    id?:number;
    libelleMairie?:string;
    quartierMairie?:string;
    typeMairie?:string;
    commune?:Commune;
}