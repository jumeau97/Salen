import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffecterPlaceUserService {
  public hostName=environment.hostName;
  constructor(private http:HttpClient) { }

getAllMarcher(){
    return this.http.get<any>(this.hostName+"/api/marcher/listeMarcher");
  }

getPlaceByIdMarcher(id:any){
  return this.http.get<any>(this.hostName+"/api/place/listePlace/"+id);
}

getListeUserByRecouvreur(){
  return this.http.get<any>(this.hostName+"/api/utilisateur/listeUserRole/recouvreur");
}

public addAffecterRecouvreur(donnee:any){
  return this.http.post(this.hostName+"/api/placeToUtilisateur/place/Utilisateur" ,donnee);
}

public findRecouByMarche(id:any){
  return this.http.get(this.hostName+"/api/placeToUtilisateur/liste/marche/recouvreur/"+id)
}

findPlaceByRecouvreur(id:any){
  return this.http.get(this.hostName+"/api/placeToUtilisateur/place/recouvreur/"+id)
}

}
