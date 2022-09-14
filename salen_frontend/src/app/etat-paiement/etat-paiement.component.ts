import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DetailPaiementComponent } from '../detail-paiement/detail-paiement.component';
import { Place } from '../model/Place';
import { MairieService } from '../service/mairie.service';
import { MarcheService } from '../service/marche.service';
import { PlaceService } from '../service/place/place.service';
import { DatePipe } from '@angular/common';
import { Payement } from '../model/Payement';
import { Paiement } from '../model/Paiement';
import { PaiementService } from '../service/paiement/paiement.service';
import { DetailDayPayComponent } from '../admin/detail-day-pay/detail-day-pay.component';


@Component({
  selector: 'app-etat-paiement',
  templateUrl: './etat-paiement.component.html',
  styleUrls: ['./etat-paiement.component.scss']
})
export class EtatPaiementComponent implements OnInit {
  mairies: any;
  markets: any;
  market: any;
  places: any;
  place:any;
  events: string[] = [];
  paiement : Paiement = new Paiement();

  displayedColumns: string[] = ['numeroPlace', 'action'];
  dataSource!: MatTableDataSource<Place>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dateFormat: any;
  nbreNotPayement: any;
  nbrePay: any;
  LPay: any;
  LNotPayement: any;

  constructor(
    private mairieService:MairieService,
    private marcheService:MarcheService,
    private placeService:PlaceService,
    private dialog:MatDialog,
    private adapter:DateAdapter<any>,
    private datePipe : DatePipe,
    private paiementService : PaiementService,
    ) {
      this.adapter.setLocale('fr');
     }

  ngOnInit(): void {
    this.findAllMairie();
  }

  //find all mairie
  findAllMairie(){
    this.mairieService.findAllMairie().subscribe((data:any)=>{
      console.log("la liste de toutes les mairie", data);
      this.mairies=data.response;
      
    });

  }

  // select mairie method
  selectMairie(event:any){
    console.log("mairie selectionnée", event.value);
    this.marcheService.getMarketByMairie(event.value.idMairie).subscribe((data:any)=>{
      console.log("les marchés d'une mairie", data.response);
      this.markets=data.response;
    })
    
  }

  // select market method
  selectMarket(event:any){
    console.log("marché selectionné", event.value);
    this.market=event.value;
    this.placeService.getPlaceAMByMarche(this.market.idMarcher).subscribe((data:any)=>{
      console.log("les places actives de cette marché", data.response); 
      this.places=data.response;
      this.dataSource = new MatTableDataSource(this.places);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  //other select market to find payement status
  OtherselectMarket(event:any){
    console.log("marché selectionné", event.value);
    //select market
    this.market=event.value;
    this.placeService.getPlaceAMByMarche(this.market.idMarcher).subscribe((data:any)=>{
      console.log("les places actives de cette marché", data.response); 
      this.places=data.response;
      // attribution of market select to paiement market
    });
  }

  
  detailsPlace(p:any){
    this.place=p;
    console.log("cette place", this.place);
    // setter
    this.placeService.setPlace(this.place);
    
    const dialogRef = this.dialog.open(DetailPaiementComponent, {
      width: '1000px',
      //  data: {name: 'this.name', animal: this.animal}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
//method to select and format date
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // format Thu Oct 25 2018 00:00:00 GMT+0400 (Gulf Standard Time) to yyyy-MM-dd
    this.dateFormat=this.datePipe.transform(event.value, 'yyyy-MM-dd');
    console.log(" c'est la date", this.dateFormat);
    
    //call method 
    this.paiementService.nbreTotalOfPlaceInLate(this.market.idMarcher, this.dateFormat).subscribe((data:any)=>{
      console.log("les places en retard de paiement", data);
      this.nbreNotPayement = data.response.length;
      this.LNotPayement = data.response;
      console.log("nbbre", this.nbreNotPayement);
      
    });

        //call method 
    this.paiementService.nbreTotalOfPlacePay(this.market.idMarcher, this.dateFormat).subscribe((data:any)=>{
      console.log("les places qui sont à jour de paiement", data);
      this.nbrePay = data.response.length;
      this.LPay = data.response;
      console.log("nbre", this.nbreNotPayement);
      
    });
    
   }
   //late place
   LatePlace(){
    console.log("bonjour", this.LPay);
    this.dialog.open(DetailDayPayComponent, {
      data:this.LPay,
    });
   }

   //not late
   NotLatePlace(){
    console.log("un notre bonjour", this.LNotPayement);
    this.dialog.open(DetailDayPayComponent, {
      data:this.LNotPayement,
    });
   }



  
  

}
