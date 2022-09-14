import { Commune } from "./Commune";

export interface Mairie {
idMairie : number;
libelleMairie : string;
quartierMairie : string;
typeMairie : string;
commune: Commune;
}