import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MairieService } from '../service/mairie.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-updateutilisateur',
  templateUrl: './updateutilisateur.component.html',
  styleUrls: ['./updateutilisateur.component.scss']
})
export class UpdateutilisateurComponent implements OnInit {
  public listeMairie : any []=[];
  public usercourant? : any;
  constructor(private mairieservice:MairieService,
     private http:HttpClient, private routeactive:ActivatedRoute,
      private userservice:UtilisateurService,
      private toastr:ToastrService,
      private router: Router,) { }

  ngOnInit(): void {

    this.mairieservice.getAllMarie().subscribe(
      data =>{
        this.listeMairie=data;
        console.log(this.listeMairie);
       }
    );

    this.userservice.getUserById(this.routeactive.snapshot.params.id)
    .subscribe((data:any) =>{
      this.usercourant=data.response;
      console.log("data",this.usercourant);
     }, error=>{
       console.log(error);
       
     });
  }

  onUpdateUtilisateur(donnee : any){
    console.log("donne à enregistre", donnee);
    
    
    
  //   let mairie = this.listeMairie.filter(element => element.idMairie == +donnee.mairie)[0]
  //    donnee.mairie = mairie;
  //    console.log(donnee);
  //   this.userservice.UpdateUtilisateur(this.routeactive.snapshot.params.id, donnee)
  //   .subscribe(data =>{
  //     alert("Utilisateur Modifier avec succes");
  //     this.router.navigateByUrl("/utilisateur");
  //    }, error=>{
  //      console.log(error);
       
  //    });

  this.userservice.newUpdateUser(donnee).subscribe((data:any)=>{
      console.log("modification", data);
      if(data['status']=="OK"){
        this.toastr.success("","Insertion reussie");
        this.router.navigateByUrl("/utilisateur");
      }
      
  });
   }

}

