import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
host=environment.hostName;
  constructor(private http:HttpClient) { }

findDteCreateByMarcket(data:any){
  return this.http.get(this.host+"/api/liste/dat/payements/"+data);
}
}
