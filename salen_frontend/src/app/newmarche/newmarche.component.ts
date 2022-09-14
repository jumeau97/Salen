import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MairieService } from '../service/mairie.service';
import { MarcheService } from '../service/marche.service';

@Component({
  selector: 'app-newmarche',
  templateUrl: './newmarche.component.html',
  styleUrls: ['./newmarche.component.scss']
})
export class NewmarcheComponent implements OnInit {

  public listeMairie : any []=[];
  currentUser: any;

  constructor(private http: HttpClient, private route: Router, private marcheservice:MarcheService, private mairieservice: MairieService)
   { 
    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('curent user', this.currentUser);
   }

  ngOnInit(): void {
    localStorage.getItem("",);
    this.getMairie();
  }

  onAddMarcher(donnee : any){ 
    let mairie = this.listeMairie.filter(element => element.idMairie == +donnee.mairie)[0]
     donnee.mairie = this.currentUser.mairie;
     console.log("marcher", donnee);
     
    this.marcheservice.ajoutermarcher(this.marcheservice.host+"/addMarcher", donnee).
    subscribe(data =>{
      this.route.navigateByUrl("/marche");
      //console.log(donnee)
      //console.log(data);

     }, error=>{
       console.log(error);
       
     });
  }

  async  getMairie(){    
    this.listeMairie = await this.mairieservice.getAllMarie().toPromise();

  }



}
