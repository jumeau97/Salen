import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MairieService } from '../service/mairie.service';

@Component({
  selector: 'app-mairie',
  templateUrl: './mairie.component.html',
  styleUrls: ['./mairie.component.scss']
})
export class MairieComponent implements OnInit {
  currentUser:any;
   public listeMairie : any;
   public listeCommune : any;

  constructor( private mairieservice: MairieService , private http: HttpClient , private router : Router) {
    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('curent user',this.currentUser);
   }

  ngOnInit(): void {

    this.mairieservice.getAllMarie()
    .subscribe(data =>{
      this.listeMairie=data;
      console.log(this.listeMairie)
    }, error=>{
      console.log(error);
      
    });
  }  

  onDelete(mairie:any){
    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      console.log(mairie);
      this.mairieservice.deleteMairie(mairie.idMairie)
      .subscribe(data =>{
       this.ngOnInit();
      }, error=>{
        console.log(error);
        
      });
    }
  }

  onUpdate(mairie:any){
    let id=mairie.idMairie
    this.router.navigateByUrl("modifiermairie/"+ id);
    console.log(btoa(id))

  }

 

 

}
