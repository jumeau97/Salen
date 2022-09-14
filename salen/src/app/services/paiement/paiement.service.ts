import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
host=environment.host;
  constructor(private http: HttpClient) { }

  checkedPay(dateR:any, place:any){
    return this.http.get(this.host+"/check/payement/"+dateR+"/"+place );
  }

  PayTicket(dateR:any, place:any){
    return this.http.get(this.host+"/paiement/ticket/"+dateR+"/"+place);
  }

  //les paiements en retard par place
  LatePay(data:any){
    return this.http.post(this.host+"/place/all/late/pay", data);
  }
  //les paiment à jour par place
  UpPay(data:any){
    return this.http.post(this.host+"/place/all/up/pay", data);
  }

}
