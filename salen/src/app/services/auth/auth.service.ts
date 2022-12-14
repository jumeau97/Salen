import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
host=environment.host
  constructor(private http: HttpClient) { }

  public login(utilisateur: any) {
    return this.http.post(this.host+'utilisateur/authRecou', utilisateur );
  }
}
