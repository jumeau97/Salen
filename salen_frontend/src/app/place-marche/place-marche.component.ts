import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DetailsPlaceComponent } from '../admin/details-place/details-place.component';
import { Marche } from '../interface/Marche';
import { AffecterPlaceMarcher } from '../model/AffecterPlaceMarcher';
import { Payement } from '../model/Payement';
import { Place } from '../model/Place';
import { AffPlaceMarcherService } from '../service/aff-place-marcher.service';
import { AffecterPlaceUserService } from '../service/affecter-place-user.service';
import { MairieService } from '../service/mairie.service';
import { MarcheService } from '../service/marche.service';
import { PlaceService } from '../service/place/place.service';



@Component({
  selector: 'app-place-marche',
  templateUrl: './place-marche.component.html',
  styleUrls: ['./place-marche.component.scss']
})

export class PlaceMarcheComponent implements OnInit {

  listeMarcher:any;
  marcher:any;
  place:any;
  affecterPlaceMarcher:AffecterPlaceMarcher=new AffecterPlaceMarcher();
  CPlace:Place=new Place();
  tabPlace:number[]=[];
  places:any[]=[];
  numPlace:any []=[];
  numMax!:number;
  currentUser: any;
  listeMarcheByMairie: any;
  payement:Payement=new Payement();

  marcheData: Marche[] = [];
  displayedColumns: string[] = ["libelle", "mairie", "action"];
  dataSource!: MatTableDataSource<any>;
  dataSource1!: MatTableDataSource<Marche>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginatorforMairie!: MatPaginator;
  @ViewChild(MatSort) sortOfMairie!: MatSort;
  mairies: any;
  markets: any;
  marche: any;
  

  constructor(private router:Router,
    private http:HttpClient,
    private apu:AffecterPlaceUserService,
    private afPM: AffPlaceMarcherService,
    private toastr: ToastrService,
    private marcheService : MarcheService,
    private mairieService : MairieService,
    private placeService:PlaceService,
    private dialog:MatDialog,
    private spinner:NgxSpinnerService
    ) { 
      this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
      console.log('curent user',this.currentUser);
    }

  ngOnInit(): void {
    this.findAllMairie();
    this.findAllMarket();
    this.findMarketByMairie();
  
    // this.dataSource=new MatTableDataSource(this.marcheData);
   
  }


  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilterOfMairie(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  // tous les mairie
  findAllMairie(){
    this.mairieService.findAllMairie().subscribe((data:any)=>{
      console.log("la liste de toutes les mairie", data);
      this.mairies=data.response;
      
      
    });

  }

  // select mairie
  selectMairie(event:any){
    console.log("mairie selectionnée", event.value);
    this.marcheService.getMarketByMairie(event.value.idMairie).subscribe((data:any)=>{
      console.log("les marchés d'une mairie", data.response);
      // this.markets=data.response;
      // this.marcheData=this.markets;
      this.dataSource1 = new MatTableDataSource(data.response);
      this.dataSource1.paginator = this.paginatorforMairie;
      this.dataSource1.sort = this.sortOfMairie;
    })
    
  }


  // Tous les marchés  d'une mairie
  findMarketByMairie(){
    
    this.marcheService.getMarketByMairie(this.currentUser.mairie.idMairie).subscribe((data:any)=>{
      // console.log("mar", data.response);
      this.listeMarcheByMairie=data.response;
      this.marcheData=this.listeMarcheByMairie;
      this.dataSource = new MatTableDataSource(this.marcheData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
  }

  findAllMarket(){
    this.apu.getAllMarcher()
    .subscribe(data =>{
      this.listeMarcher=data.response;
      console.log("bonsoir",this.listeMarcher);
    }, error=>{
      console.log(error);
      
    });
  }
  

  // Recuperer la place en fonction du marché selectionné
  getSelect(event:any){

    console.log("evenement",event.value);
    // Marche selectionner
    this.marcher=event.value;
    // affecter le marcher selectionner au payload
    this.affecterPlaceMarcher.marcher=event.value;
    
    // toutes les places dans le marcher
    //  this.numPlace=event.value.places;
     this.placeService.getPlaceByMarche(this.marcher.idMarcher).subscribe((data:any)=>{
       this.numPlace=data.response;
       console.log("num", this.numPlace);
       
    })
    
    // let valeur=this.event.MatSelectChange.value;

}

savePlace(donnee:any){
console.log("",donnee);
  
  
   // parcourrir le numero de place
   this.numPlace.forEach(num=>{
    // pousser dans un tableau
    this.tabPlace.push(num.numeroPlace);
  });
  console.log("numero place", this.tabPlace);
  // numero Maxi
  if(this.tabPlace.length==0){
     this.numMax=0
     console.log("numMax tout de suite",this.numMax);
     
  }else{
     this.numMax=Math.max(...this.tabPlace);
     console.log("tableau non vide", this.tabPlace);
     
  }
  
  console.log("numero superieur",this.numMax);
  if(this.numMax==0){
    for(let i=0; i <this.place; i++){
      this.places.push({
        numeroPlace:(i+1),
        etatam:false,
        etatar:false,
      });
    }
  }else{
    for(let i=0; i <this.place; i++){
      this.places.push({
        numeroPlace:(this.numMax+i+1),
        etatam:false,
        etatar:false,
      });
    }

  }

  console.log("places", this.places);

  this.affecterPlaceMarcher.place=this.places

  console.log("format", this.affecterPlaceMarcher);
  this.afPM.AffPlaceMarche(this.affecterPlaceMarcher).subscribe((res:any)=>{
    console.log("", res);
    if(res['status']='OK'){
      this.toastr.success("",res['message'])
      this.places=[];  
      this.tabPlace=[];
      this.findAllMarket();
      // this.numMax=0;
    }
    
  });
  

}

detailsPlace(data:any){
  // console.log("details place",data );
 
    this.marche=data;
    this.marcheService.setMarche(this.marche);
    
    const dialogRef = this.dialog.open(DetailsPlaceComponent, {
      width: '1000px',
      //  data: {name: 'this.name', animal: this.animal}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
    
  
}


}
