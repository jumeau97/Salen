import { Marchand } from "./Marchand";
import { Place } from "./Place";

export interface AffecterPlaceMarchand{
    id : number;
    dateAffPlaceMarchand: Date;
    marchand : Marchand;
    place : Place
}