import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  init(){
    this.platform.backButton.subscribeWithPriority(10, async () =>{
      const currentUrl= this.router.url;
      if(currentUrl === "/markets"){
        navigator['app'].exitApp();
  
        // const alert = await this.alertController.create({
        //   header: 'Confirmation!',
        //   message: 'Voulez-vous vraiment quitter ?',
        //   buttons: [
        //     {
        //       text: 'Retour',
        //       role: 'cancel',
        //     }, {
        //       text: 'Ok',
        //       handler: () => {
        //         navigator['app'].exitApp();
        //       }
        //     }
        //   ]
        // });
    
        // await alert.present();
      }else{
        this.navController.back();
      }
    });
  }

  constructor(
    private navController : NavController,
    private router : Router,
    private platform : Platform,
    private alertController : AlertController,
    ) { }
}
