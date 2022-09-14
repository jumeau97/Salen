import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarchandService {
  public host=environment.marchandurl
  marchand: any;

  constructor(private http: HttpClient) { }

  getAllMarchand(){
    return this.http.get<any>(this.host+"/listeMarchands");
 }
 

 
 public ajoutermarchand(host:any , donnee:any){
   return this.http.post(this.host+"/addMarchand" ,donnee);
 }
 
 public deleteMarchand(idMarchand:number){
   return this.http.delete(this.host+"/deleteById/"+idMarchand);
 } 
 
 getMarchandByUrl(idMarchand:number){
   return this.http.get(this.host+"/listeById/"+idMarchand);
 }
 
 public UpdateMarchand(idMarchand:number , donnee:any){
   return this.http.put(this.host+"/updateMarchand/"+idMarchand , donnee);
 } 

 getMarchand(){
   return this.marchand;
 }

 setMarchand(data:any){
   this.marchand=data;
 }
}
