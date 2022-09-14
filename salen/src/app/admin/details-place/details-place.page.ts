import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PaiementService } from 'src/app/services/paiement/paiement.service';

@Component({
  selector: 'app-details-place',
  templateUrl: './details-place.page.html',
  styleUrls: ['./details-place.page.scss'],
})
export class DetailsPlacePage implements OnInit {
  segmentStatus: any = "paie";
  getPlace: any;
  listpaie: any;
  listNoPaie: any;

  constructor(private modalController : ModalController, private navParams : NavParams, private paiementService : PaiementService) 
  { 
    console.log("data passed", this.navParams.data[0]);
    this.getPlace = this.navParams.data[0];
    this.defaultMethodPaie();
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.segmentStatus = ev.detail.value;
    // paiement à jour 
    if(this.segmentStatus == "paie"){
      this.paiementService.UpPay(this.getPlace).subscribe((data:any)=>{
        console.log("les paiements à jour", data);
        this.listpaie = data.response;
      });
    }else{
      // paiement en retard 
      this.paiementService.LatePay(this.getPlace).subscribe((data:any)=>{
        console.log("les paiements en retard", data);
        this.listNoPaie = data.response;
      });
    }
  }

  //close
  close(){
    this.modalController.dismiss();
  }

  //INITIALIZATION
  defaultMethodPaie(){
    this.paiementService.UpPay(this.getPlace).subscribe((data:any)=>{
      console.log("les paiements à jour", data);
      this.listpaie = data.response;
    });
  }

}
