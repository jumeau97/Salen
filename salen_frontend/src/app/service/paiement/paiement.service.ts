import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
host=environment.hostName;
  constructor(private http:HttpClient) { }

  saveSeveralPlaceInPai(data:any){
    return this.http.post(this.host+"/api/save/places/paiement", data);
  }

  getAllPayPlace(data:any){
    return this.http.post(this.host+"/api/liste/pay/place",data);
  }

  //count the place number in payement late
  nbreTotalOfPlaceInLate(id:any, dateRecou:any){
    return this.http.get(this.host+"/api/place/late/pay/"+id+"/"+dateRecou);
  }

  //count the place number that pay
  nbreTotalOfPlacePay(id:any, dateRecou:any){
    return this.http.get(this.host+"/api/place/up/pay/"+id+"/"+dateRecou);
  }

}
