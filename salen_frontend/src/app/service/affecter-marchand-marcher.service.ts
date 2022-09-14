import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffecterMarchandMarcherService {
  hostName=environment.hostName;
  constructor(private http:HttpClient, private router: Router) { }

  getAllMarchands(){
   return  this.http.get<any>(this.hostName+"/api/marchand/listeMarchands");
  }

  getPlaceByIdMarcherM(id:any){
    return this.http.get<any>(this.hostName+"/api/place/listePlaceM/"+id);
  }

  public AffPlaceMarchand(donnee:any){
    return this.http.post(this.hostName+"/api/affectation/add/place/marchand" ,donnee);
  }

  public findMarchandsByMarche(id:any){
    return this.http.get(this.hostName+"/api/affectation/liste/marche/marchands/"+id);
  }

  findPlaceByMarchand(id:any){
    return this.http.get(this.hostName+"/api/affectation/place/marchand/"+id);
  }

  // remove place to trader method
  removePlaceToTrader(id:any, id2:any){
    return this.http.get(this.hostName+"/api/affectation/remove/trader/place/"+id+"/"+id2);
  }
}
