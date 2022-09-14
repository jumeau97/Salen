import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AffecterPlaceService } from 'src/app/services/affecterPlace/affecter-place.service';
import { PrintService } from 'src/app/services/print/print.service';



@Component({
  selector: 'app-markets',
  templateUrl: './markets.page.html',
  styleUrls: ['./markets.page.scss'],
})
export class MarketsPage implements OnInit {
  listeMarcherPlace: any
  listlace: any
  currentUser: any;
  tab: any[] = [];
  market: any[] = [];
  marketByPlace: any[] = [];
  groupByMarcher: any = {};
  constructor(
    private apmService: AffecterPlaceService,
    private router: Router,
    private bluetoothSerial:BluetoothSerial,
  ) 
  { 
    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('currentUser', this.currentUser);
    this.market=[];
    // this.printer.setPrinter("bonjour")
    // console.log("slt",this.printer.getPrinter());
    
  }

  ngOnInit() {
    this.apmService.getMarherPlaceByUser(this.currentUser.idUtilisateur).subscribe((ret: any) => {
      console.log('marcher', ret);
      if (ret['status'] === 'OK') {
        this.listeMarcherPlace = ret['response'];
        // this.groupByFonction(ret['response']);
        if (this.listeMarcherPlace.length > 0) {
          this.listeMarcherPlace.forEach(elt => {
            const indexMar = this.market.findIndex(id => id.id === elt.marcher.idMarcher);
            console.log("index", indexMar);
            
            if (indexMar > -1) {
              console.log('ca existe ');

            } else {
              this.market.push({
                id: elt.marcher.idMarcher,
                name: elt.marcher.libelleMarcher,
                mairie: elt.marcher.mairie.libelleMairie,
              })
            }
          });
          console.log('market', this.market)

          // this.getAllPlaceByMarketAndUser(this.market[this.indexEntity].id);
        }

      } else {
        console.log('error')
      }
    },
      error => { console.log('error', error) });
  }

  place(event:any){
    console.log("place 0",event );
    this.router.navigate(["market/places/"+event.id]);
    
  }

  
  logOut() {
    localStorage.removeItem('current_session');
    localStorage.removeItem('cour');
    localStorage.removeItem('current-token');
    this.router.navigate(['/login']);
    // this.toast.info("Déconnexion")
  }

}
