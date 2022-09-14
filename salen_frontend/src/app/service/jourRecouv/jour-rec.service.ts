import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JourRecService {
host=environment.hostName;
  constructor(private http:HttpClient) { }

  getAllDaysRecou(){
    return this.http.get(this.host+"/api/alldaysRe");
  }
}
