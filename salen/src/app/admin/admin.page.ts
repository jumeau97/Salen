import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { BackButtonService } from '../services/back-button/back-button.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  constructor(private backButtonService : BackButtonService, private platform : Platform,) 
  {
    this.initializeApp();
   }

  ngOnInit() {
    
  }

  initializeApp(){
    this.platform.ready().then(()=>{
       this.backButtonService.init();
    })
  }

}
