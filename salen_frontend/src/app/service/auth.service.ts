import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public host = environment.mairieurl;
  public hostCommune = environment.communeurl;
  hostP=environment.hostName;

  constructor(private http: HttpClient,
    ) { }

  getAllMarie() {
    return this.http.get<any>(this.host + "/listeMairie");
  }

  public login(utilisateur: any) {
    return this.http.post(this.hostP+'/api/utilisateur/auth', utilisateur );
}

getAllCommune(){
  return this.http.get<any>(this.hostCommune + "/listeCommune");
}

public ajoutermairie(host: any, donnee: any){
  return this.http.post(this.host + "/addMairie", donnee);
}

public deleteMairie(idMairie: number){
  return this.http.delete(this.host + "/deleteById/" + idMairie);
}

getMairieByUrl(idMairie: number){
  return this.http.get(this.host + "/listeById/" + idMairie);
}

public UpdateMairie(idMairie: number, donnee: any){
  return this.http.put(this.host + "/updateMairie/" + idMairie, donnee);
} 

}
