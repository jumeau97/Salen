import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { AffecterPlaceService } from 'src/app/services/affecterPlace/affecter-place.service';
import { PrintService } from 'src/app/services/print/print.service';
import { TestAcc } from 'src/app/test/test-acc';
import { BluetoothConnectPage } from '../bluetooth-connect/bluetooth-connect.page';
import { DetailsPlacePage } from '../details-place/details-place.page';
import { PaiementPage } from '../paiement/paiement.page';

@Component({
  selector: 'app-place-market',
  templateUrl: './place-market.page.html',
  styleUrls: ['./place-market.page.scss'],
})
export class PlaceMarketPage implements OnInit {
  currentUser: any;
  listlace: any;
  dateAjou = new Date();
  today: string;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  listPlaceScroll: any;
  showList: any = 10;
  constructor(
    private activatedRoute:ActivatedRoute,
    private apmService: AffecterPlaceService,
    public modalController: ModalController,
    private btSerial : BluetoothSerial,
  ) 
  { 
    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('currentUser', this.currentUser);
    this.getAllPlaceByMarketAndUser(this.activatedRoute.snapshot.params.id);
    
  }

  ngOnInit() {
  }

  getAllPlaceByMarketAndUser(id) {
    
    this.apmService.findPlaceByUser(id,this.currentUser.idUtilisateur).subscribe((ret: any) => {
      console.log('marcher', ret);
      if (ret['status'] === 'OK') {
        this.listlace = ret['response'];
        this.listPlaceScroll = this.listlace.slice(0, this.showList);
        console.log('this.listlace', this.listlace);
      } else {
        console.log('error')
      }
    },
      error => { console.log('error', error) });
  }

  // afficher le modal
  async presentModal(data) {
    const modal = await this.modalController.create({
      component: PaiementPage,
      componentProps:{Place:data},
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  //place details modal
  async placeDetailModal(data) {
    const modal = await this.modalController.create({
      component: DetailsPlacePage,
      componentProps:[data.place],
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async bluetoothModal(){
    const modal = await this.modalController.create({
      component: BluetoothConnectPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();

  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.showList+=10;
      this.listPlaceScroll = this.listlace.slice(0, this.showList);
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
     
      if (this.listlace.length == this.listPlaceScroll.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
