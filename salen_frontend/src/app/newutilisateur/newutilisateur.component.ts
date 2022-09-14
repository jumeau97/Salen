import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from '../model/Utilisateur';
import { MairieService } from '../service/mairie.service';
import { RoleService } from '../service/role.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-newutilisateur',
  templateUrl: './newutilisateur.component.html',
  styleUrls: ['./newutilisateur.component.scss']
})
export class NewutilisateurComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  listeMairie:any;
  public listeRole: any[] = [];
  currentUser: any;
  // randomstring = Math.random().toString(36).slice(-8);
  randomstring="123456";
  // mairie:any;
  utilisateur?:Utilisateur;
  mairie: any;
  newMairie: any;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private http: HttpClient,
    private route: Router,
    private utilisateurService: UtilisateurService,
    private mairieService: MairieService,
    private roleService: RoleService,
    private toastr:ToastrService,
    private spinner : NgxSpinnerService
    ) {
      console.log('random', this.randomstring);
      

    console.log('curent avant user', this.currentUser);

    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('curent user', this.currentUser);

  }

  ngOnInit(): void {
    this.getAllMairie();
    this.getAllRole();
  }

  onAddUtilisateur(utilisateur: any) {
    this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);

    console.log("aller",this.listeMairie);

    if (this.currentUser.role == 'super_admin') { 
      // console.log("ma mairie",utilisateur.mairie);
      utilisateur.mairie = this.newMairie;
      utilisateur.password=this.randomstring;
      console.log(utilisateur);
      this.utilisateurService.ajouterUtilisateur(this.utilisateurService.host + "/addUtilisateur", utilisateur).
        subscribe(data => {
          console.log(data);
          this.toastr.success("","Insertion reussie");
          // this.route.navigateByUrl("/utilisateur");
          console.log(utilisateur);

        }, error => {
          console.log(error);

        });

    } else {

      utilisateur.mairie=this.currentUser.mairie;
      utilisateur.password=this.randomstring;
      utilisateur.role="recouvreur";
      console.log("recouvreur",utilisateur);
      
      this.utilisateurService.ajouterUtilisateur(this.utilisateurService.host+"/addUtilisateur",utilisateur).
      subscribe((data:any)=> {
        console.log("new user", data);
        if(data!=""){
          this.toastr.success("","Insertion reussie");
          // this.route.navigateByUrl("/utilisateur");
          // window.location.reload();
        }
        // this.route.navigateByUrl("/utilisateur");
      },error=> {
        console.log(error);
      });



    }
    this.spinner.hide();

  }

   getAllMairie() {
    this.mairieService.findAllMairie().subscribe((data:any)=>{
      console.log("les mairies", data);
     this.mairie=data.response;
      
    })
  }

  async getAllRole() {
    this.listeRole = await this.roleService.getAllRole().toPromise();
  }

  select(event:any){
    console.log("event",event.target.value);
    this.mairieService.getMairieByUrl(event.target.value).subscribe((data:any)=>{
      console.log(data);
      this.newMairie=data;
    })
    
  }

}
