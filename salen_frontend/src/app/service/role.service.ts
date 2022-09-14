import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public host=environment.roleurl;

  constructor(private http:HttpClient) { }

  getAllRole(){
    return this.http.get<any>(this.host+"/listeRole")
  }
}
