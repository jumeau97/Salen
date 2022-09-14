import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Payement } from '../model/Payement';
import { JourRecService } from '../service/jourRecouv/jour-rec.service';
import { MarcheService } from '../service/marche.service';
import { PaiementService } from '../service/paiement/paiement.service';
import { PlaceService } from '../service/place/place.service';
import { TicketService } from '../service/ticket/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  currentUser: any;
  selected = 'option2';
  minDate: Date;
  maxDate: Date;
  marketsbyMairie: any;
  listPlace: any;
  DaysRec: any;
  payements:Payement = new Payement();
  TdateCreate: any;
  dtecreate: any[] = [];
  allEvent: any;
  constructor(
    private marcherService:MarcheService,
    private placeService:PlaceService,
    private JourRec:JourRecService,
    private paieService:PaiementService,
    private toastr:ToastrService,
    private ticket:TicketService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('curent user',this.currentUser);
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
   }

  ngOnInit(): void {
    this.getMarket();
    this.getAllDaysRec();
  }

  getMarket(){
    this.marcherService.getMarketByMairie(this.currentUser.mairie.idMairie).subscribe((data:any)=>{
      console.log("Marcher par maire", data);
      this.marketsbyMairie=data.response;
      
    });
  }

  selectMarket(event:any){
    this.allEvent=event;
    this.dtecreate=[];
    // console.log("market select", event.value);
    // =================================
    // DteCreateByMarcket(){
      this.ticket.findDteCreateByMarcket(event.value.idMarcher).subscribe((data:any)=>{
        this.TdateCreate = data.response;
        console.log("dates créees par marché", this.TdateCreate);
        if(this.TdateCreate.length  > 0){
          this.TdateCreate.forEach((e: any) => {
            const index = this.dtecreate.findIndex((id: any) => id.id === e.jourRecou.dateRecou);

            if (index > -1) {
              console.log('ca existe ');

            } else {
              this.dtecreate.push({
                id: e.jourRecou.dateRecou,
              })
            }
          });
          console.log('creation', this.dtecreate)
        }
        
      });
    // }
    // =================================
    this.placeService.getPlaceAMByMarche(event.value.idMarcher).subscribe((data:any)=>{
      // console.log("place par marcher/ AM", data);
      this.listPlace=data.response;
      this.getAllDaysRec();
    });
  }

  getAllDaysRec(){
    this.JourRec.getAllDaysRecou().subscribe((data:any)=>{
      // console.log("les dates crée", data);
      this.DaysRec=data.response;
      
    });
  }

  createticket(data:any){
    // console.log("les données", data.dayRe);
    // console.log("places", this.listPlace);
    
    this.payements.place=this.listPlace;
    this.payements.jourRecou=data.dayRe;
    this.payements.MontantPayement=0;
    this.payements.resteApaye=50;
    console.log("paiement complet", this.payements);
    this.paieService.saveSeveralPlaceInPai(this.payements).subscribe((data:any)=>{
      console.log("inserer...", data);

      if(data['status']==="OK"){
        this.toastr.success("",data['message']);
        this.getMarket();
        this.getAllDaysRec();
        this.selectMarket(this.allEvent);
      }
      
    })
  }





}
