import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffecterPlaceService {
  host=environment.host;
  constructor(private http: HttpClient) { }

  getMarherPlaceByUser(id:any){
    return this.http.get<any>(this.host+"placeToUtilisateur/affecterPlaceUser/"+id);
  }
  findPlaceByUser(idMarcher,idUser){
    return this.http.get<any>(this.host+"/placeToUtilisateur/findPlaceByUser/"+idMarcher+"/"+idUser +"");
  }

  findMarchandByPlace(data:any){
    return this.http.post(this.host+"/affectation/marchand", data);
  }
}
