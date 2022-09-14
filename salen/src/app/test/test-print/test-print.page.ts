import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrintService } from 'src/app/services/print/print.service';

@Component({
  selector: 'app-test-print',
  templateUrl: './test-print.page.html',
  styleUrls: ['./test-print.page.scss'],
})
export class TestPrintPage implements OnInit {
  bluetoothList:any=[];
  selectedPrinter:any;
  constructor(private modalController:ModalController, private print:PrintService) 
  {
    this.listPrinter();
   }

  ngOnInit() {}

   //This will list all of your bluetooth devices
   listPrinter() { 
    this.print.searchBluetoothPrinter()
     .then(resp=>{
 
      //List of bluetooth device list
      this.bluetoothList=resp;
  });
}
//This will store selected bluetooth device mac address
selectPrinter(macAddress)
{
//Selected printer macAddress stored here
this.selectedPrinter=macAddress;
}

//This will print
printStuff()
{  

 //The text that you want to print
 var myText="Hello hello hello \n\n\n This is a test \n\n\n";
 this.print.sendToBluetoothPrinter(this.selectedPrinter,myText);
}


dismissModal(){
this.modalController.dismiss({
  'dismissed': true
});
}

}
