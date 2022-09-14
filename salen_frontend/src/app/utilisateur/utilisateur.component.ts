import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MairieService } from '../service/mairie.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  public listeUtilisateur : any;
  public listeMairie : any;
  currentUser: any;

  constructor(private mairieservice:MairieService, private http:HttpClient, private userservice:UtilisateurService, private route:Router) {
    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('curent user',this.currentUser);
   }

  ngOnInit(): void {
    // this.userservice.getAllUtilisateur()
    // .subscribe(data =>{
    //   this.listeUtilisateur=data;
    //   console.log("liste utilisateur",this.listeUtilisateur)
    // }, error=>{
    //   console.log(error);
      
    // });

  

    if(this.currentUser.role=="super_admin"){
      //afficher les utilisateur
      this.userservice.getNewMethodAllUser()
      .subscribe((data:any) =>{
        this.listeUtilisateur=data.response;
        console.log("liste utilisateur",this.listeUtilisateur)
      }, error=>{
        console.log(error);
        
      });
    }else{
    this.userservice.getUserByRole("recouvreur", this.currentUser.mairie.idMairie)
    .subscribe((data:any) =>{
      this.listeUtilisateur=data.response;
      console.log("liste utilisateur",this.listeUtilisateur);
    }, error=>{
      console.log(error);
      
    });
  

  }
}

  onDelete(user:any){
    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      console.log(user);
      this.userservice.deleteUtilisateur(user.idUtilisateur)
      .subscribe(data =>{
       this.ngOnInit();
      }, error=>{
        console.log(error);
        
      });
    }
  }

  onUpdate(user:any){
    let id=user.idUtilisateur
    this.route.navigateByUrl("updateUtilisateur/"+ id);
    console.log(btoa(id))

  }



}
