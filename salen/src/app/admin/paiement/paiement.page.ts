import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { Payement } from 'src/app/Model/Payement';
import { AffecterPlaceService } from 'src/app/services/affecterPlace/affecter-place.service';

import { JourRecouService } from 'src/app/services/jourRecou/jour-recou.service';
import { PaiementService } from 'src/app/services/paiement/paiement.service';
import { PrintService } from 'src/app/services/print/print.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
})
export class PaiementPage implements OnInit {
selectedPrinter:any;
place:any;
message={sujet:""};
payement:Payement=new Payement();
  dateCollecte: any;
  jourRecou: any;
  msg: boolean=false;
  msgPay: boolean;
  valid: boolean;
  marchand={nom:"", prenom:"", mairie:"", marche:""};
  currentUser: any;
  constructor(
    private modalController:ModalController,
     private print:PrintService,
      private navParams:NavParams,
      private PayService:PaiementService,
      private JourReouService:JourRecouService,
      private affPlaceMarchandService:AffecterPlaceService,
      private toastController:ToastController,
      ) 
      { 
        this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
        console.log('currentUser', this.currentUser);
      }

  ngOnInit() {
    this.place=this.navParams.data.Place.place;
    console.log("la place", this.place);
    this.marchand.mairie=this.place.marcher.mairie.libelleMairie;
    this.marchand.marche=this.place.marcher.libelleMarcher;
    // this.payement.place=this.place;
    
  }



// selection de la date
dateChange(event){
  this.dateCollecte=event.target.value;
  console.log('date change', this.dateCollecte);
  //  this.JourReouService.findJourRByDate(this.dateCollecte).subscribe((data:any)=>{
  //    console.log("la date", data.response);
  //    this.jourRecou=data.response;
  //   //  this.payement.jourRecou=this.jourRecou;
  //  });

   this.checkPay();
}

//cheched payement
checkPay(){
  this.msg=false;
  this.msgPay=false;
  this.valid=false;
  // console.log("ton contenu", this.dateCollecte);
  // console.log("now id de la plac", this.place.idPlace);
  this.PayService.checkedPay(this.dateCollecte, this.place.idPlace).subscribe((data:any) => {
    console.log("dis moi", data);
    if(data.response==""){
      console.log("ticket indisponible");
      this.msg=true;
      this.message.sujet="*** Ticket indisponible ***";
      
    }else{
      if(data.response[0].montantPayement=="0"){
        console.log("ticket disponible");
        this.msgPay=true;
        this.affPlaceMarchandService.findMarchandByPlace(this.place).subscribe((data:any)=>{
           //this.marchand=data.response;
          this.marchand.nom=data.response.marchand.nomMarchand;
          this.marchand.prenom=data.response.marchand.prenomMarchand;
          console.log("info marchand", this.marchand);
          
        })
      }else{
        console.log("paiement effectué");
        this.valid=true;  
        this.affPlaceMarchandService.findMarchandByPlace(this.place).subscribe((data:any)=>{
          //this.marchand=data.response;
         this.marchand.nom=data.response.marchand.nomMarchand;
         this.marchand.prenom=data.response.marchand.prenomMarchand;
         console.log("info marchand", this.marchand);
         
       })
        
      }
    }
  })
}

  //This will print
  printStuff()
  {  
    console.log("la place", this.place.idPlace);
    
    this.PayService.PayTicket(this.dateCollecte, this.place.idPlace).subscribe((data:any)=>{
      console.log("paiement effectué", data);
      if(data['status']==="OK"){
        
        //alert
        this.PaiementToast();
        // console.log("modifie");
          //  //The text that you want to print
      this.selectedPrinter=this.print.getPrinter();
      //  let name="Korotoumou SANOGO";
      var myText= "\n =*=*=*=*=*=*=*=* SALEN *=*=*=*=*=*=*=\n Date: "+this.dateCollecte+"\n Mairie: "+ this.marchand.mairie +"\n Marche: "+this.marchand.marche+"\n Place N°: "+this.place.numeroPlace+"\n Nom & prenom: "+this.marchand.prenom+" "
      +this.marchand.nom+"\n Montant : 50 fcfa \n Recouvreur: "+ this.currentUser.prenomUtilisateur+" "+ this.currentUser.nomUtilisateur+"\n *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* \n\n\n\n";
      this.print.sendToBluetoothPrinter(this.selectedPrinter,myText);
        
      }
      //fermer le modal
      this.dismissModal();
    })
  

  }

  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

  //alert paiement OK
async PaiementToast() {
  const toast = await this.toastController.create({
    message: 'Paiement reussie',
    color:'success',
    duration: 2000
  });
  toast.present();
}



}
