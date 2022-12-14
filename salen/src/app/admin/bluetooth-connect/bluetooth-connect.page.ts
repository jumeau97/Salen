import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PrintService } from 'src/app/services/print/print.service';

@Component({
  selector: 'app-bluetooth-connect',
  templateUrl: './bluetooth-connect.page.html',
  styleUrls: ['./bluetooth-connect.page.scss'],
})
export class BluetoothConnectPage implements OnInit {
  bluetoothList:any=[];
  selectedPrinter:any;
  constructor(
    private print:PrintService, 
    private modalController:ModalController,
    private toastController:ToastController,
    ) 
  { 
    this.listPrinter();
  }

  ngOnInit() {
  }

     //This will list all of your bluetooth devices
  listPrinter() { 
    this.print.searchBluetoothPrinter()
      .then(resp=>{
   
      //List of bluetooth device list
      this.bluetoothList=resp;
      console.log(this.bluetoothList);
      
    });
  }

//This will store selected bluetooth device mac address
selectPrinter(macAddress)
{
//Selected printer macAddress stored here
this.selectedPrinter=macAddress;
this.print.setPrinter(this.selectedPrinter);
// this.selectedPrinter=macAddress;
if(this.selectedPrinter){
  this.BluetoothToast();
  this.dismissModal();
}
}

//fermer le modal
dismissModal(){
  this.modalController.dismiss({
    'dismissed': true
  });
}

//alert
async BluetoothToast() {
  const toast = await this.toastController.create({
    message: 'appareil connecté',
    color:'success',
    duration: 2000
  });
  toast.present();
}

}
