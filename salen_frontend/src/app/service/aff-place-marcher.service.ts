import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffPlaceMarcherService {
  hostName=environment.hostName;
  constructor(private router: Router, private http:HttpClient) { }

  public AffPlaceMarche(donnee:any){
    return this.http.post(this.hostName+"/api/place/affecter" ,donnee);
  }
}
