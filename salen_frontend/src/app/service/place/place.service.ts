import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
place:any;
  constructor(private http:HttpClient) { }

  host=environment.hostName
  
  getPlaceByMarche(id:any){
    return this.http.get(this.host+"/api/place/place/marche/"+id)
  }

  getPlaceAMByMarche(id:any){
    return this.http.get(this.host+"/api/place/marche/placeAM/"+id)
  }

  setPlace(data:any){
    this.place=data;
  }

  getPlace(){
    return this.place;
  }
}
