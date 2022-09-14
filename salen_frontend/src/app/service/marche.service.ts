import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarcheService {

  public host=environment.marcheurl;
  marche: any;
  

  constructor(private http:HttpClient) { }

  getAllMarche(){
    return this.http.get<any>(this.host+"/listeMarcher")
  }

  public ajoutermarcher(host:any , donnee:any){
    return this.http.post(this.host+"/addMarcher" ,donnee);
  }
  
  public deleteMarcher(idMarcher:number){
    return this.http.delete(this.host+"/deleteById/"+idMarcher);
  } 
  
  getMarcherByUrl(idMarcher:number){
    return this.http.get(this.host+"/listeById/"+idMarcher);
  }
  
  public UpdateMarcher(idMarcher:number , donnee:any){
    return this.http.put(this.host+"/updateMarche/"+idMarcher , donnee);
  } 

  public getMarketByMairie(id:any){
    return this.http.get(this.host+"/listeMarcherMairie/"+id)
  }

  setMarche(data:any){
    this.marche=data;
  }

  getMarche(){
    return this.marche;
  }

  
}
