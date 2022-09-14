import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MarchandService } from '../service/marchand.service';

@Component({
  selector: 'app-newmarchand',
  templateUrl: './newmarchand.component.html',
  styleUrls: ['./newmarchand.component.scss']
})
export class NewmarchandComponent implements OnInit {
  today: number = Date.now();
  constructor(private marchandService:MarchandService, private route: Router, private http:HttpClient, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onAddMarchand(donnee : any){ 
    
    this.marchandService.ajoutermarchand(this.marchandService.host+"/addMarchand", donnee).
    subscribe(data =>{
      this.toastr.success("","Insertion reussie");
      this.route.navigateByUrl("/marchand");
      console.log(donnee)
      console.log(data);

     }, error=>{
       console.log(error);
       
     });
  }

  

}
