import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MairieService } from '../service/mairie.service';
import { MarcheService } from '../service/marche.service';

@Component({
  selector: 'app-updatemarcher',
  templateUrl: './updatemarcher.component.html',
  styleUrls: ['./updatemarcher.component.scss']
})
export class UpdatemarcherComponent implements OnInit {

  public listeMairie : any []=[];
  public marchecourant? : any;

  constructor(private http:HttpClient, private router: Router, private marcheService:MarcheService, private mairieService: MairieService,
    private routeactive:ActivatedRoute) { }

  ngOnInit(): void {
    this.mairieService.getAllMarie().subscribe(
      data =>{
        this.listeMairie=data;
        console.log(this.listeMairie);
       }
    );

    this.marcheService.getMarcherByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.marchecourant=data;
      console.log(this.marchecourant);
     }, error=>{
       console.log(error);
       
     });
  }

  OnUpdateMarcher(donnee : any){
    let mairie = this.listeMairie.filter(element => element.idMairie == +donnee.mairie)[0]
     donnee.mairie = mairie;
     console.log(donnee);
    this.marcheService.UpdateMarcher(this.routeactive.snapshot.params.id, donnee)
    .subscribe(data =>{
      alert("Marcher Modifier avec succes");
      this.router.navigateByUrl("/marche");
     }, error=>{
       console.log(error);
       
     });
  }

}
