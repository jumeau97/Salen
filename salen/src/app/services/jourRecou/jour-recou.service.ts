import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JourRecouService {
host=environment.host;
  constructor(private http: HttpClient) { }

  findJourRByDate(ldate){
    return this.http.get(this.host+"/mydate/"+ldate);
  }
}
