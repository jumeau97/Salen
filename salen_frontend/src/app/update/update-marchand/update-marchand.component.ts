import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarchandService } from 'src/app/service/marchand.service';

@Component({
  selector: 'app-update-marchand',
  templateUrl: './update-marchand.component.html',
  styleUrls: ['./update-marchand.component.scss']
})
export class UpdateMarchandComponent implements OnInit {
  public marchandcourant? : any;
  constructor(private http: HttpClient, private route: Router, private marchandservice:MarchandService, private routeactive:ActivatedRoute) { }

  ngOnInit(): void {
    this.marchandservice.getMarchandByUrl(this.routeactive.snapshot.params.id)
    .subscribe(data =>{
      this.marchandcourant=data;
      console.log(this.marchandcourant);
     }, error=>{
       console.log(error);
       
     });
  }

  OnUpdateMarchand(donnee : any){

    this.marchandservice.UpdateMarchand(this.routeactive.snapshot.params.id, donnee)
    .subscribe(data =>{
      alert("Marchand Modifier avec succes");
      this.route.navigateByUrl("/marchand");
     }, error=>{
       console.log(error);
       
     });
  }


}
