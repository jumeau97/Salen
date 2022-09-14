import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  public host=environment.utilisateururl;
  utilisateur: any;

  constructor(private http:HttpClient) { }

  getAllUtilisateur(){
    return this.http.get<any>(this.host+"/listeUtilisateur")
  }

  getNewMethodAllUser(){
    return this.http.get(this.host+"/allUser");
  }

  public ajouterUtilisateur(host:any , donnee:any){
    return this.http.post(this.host+"/addUtilisateur" ,donnee);
  }
  
  public deleteUtilisateur(idUtilisateur:number){
    return this.http.delete(this.host+"/deleteById/"+idUtilisateur);
  } 
  
  getUtilisateurByUrl(idUtilisateur:number){
    return this.http.get(this.host+"/listeById/"+idUtilisateur);
  }
  
  public UpdateUtilisateur(idUtilisateur:number , donnee:any){
    return this.http.put(this.host+"/updateUtilisateur/"+idUtilisateur , donnee);
  } 

   // User by role
   getUserByRole(role:any, mairie:any){
    return this.http.get(this.host+"/listeUser/"+role+"/"+mairie);
  }

  //new update
  newUpdateUser(data:any){
    return this.http.post(this.host+"/update/user", data);
  }

  getUserById(id:any){
    return this.http.get(this.host+"/userById/"+id)
  }
  getUtilisateur(){
    return this.utilisateur;
  }

  setUtilisateur(data:any){
    this.utilisateur=data;
  }
}
