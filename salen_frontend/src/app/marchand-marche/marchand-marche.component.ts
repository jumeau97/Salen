import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DetailMarchandComponent } from '../admin/detail-marchand/detail-marchand.component';
import { AffecterPlaceMarchand } from '../interface/AffectePlaceMarchand';
import { Marchand } from '../interface/Marchand';
import { AffecterPlaceMarchands } from '../model/AffecterPlaceMarchand';
import { AffecterMarchandMarcherService } from '../service/affecter-marchand-marcher.service';
import { AffecterPlaceUserService } from '../service/affecter-place-user.service';
import { MairieService } from '../service/mairie.service';
import { MarchandService } from '../service/marchand.service';
import { MarcheService } from '../service/marche.service';

@Component({
  selector: 'app-marchand-marche',
  templateUrl: './marchand-marche.component.html',
  styleUrls: ['./marchand-marche.component.scss']
})
export class MarchandMarcheComponent implements OnInit {

  marcher:[]=[];
  toppings = new FormControl();


  listeMarcher:any;
  listeMarchands:any;
  place:any; event:any; 
  marchand:any; 
  affecterPlaceMarchand:AffecterPlaceMarchands=new AffecterPlaceMarchands();
  mairies: any;
  markets: any;

  // marcheData: AffecterPlaceMarchand[] = [];
  displayedColumns: string[] = ["nomM","prenomM","numeroPlace", "action"];
  dataSource!: MatTableDataSource<Marchand>;
 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listeMarchandsM: any;
  marchands: any[] = [];



  constructor(private http:HttpClient, private apu:AffecterPlaceUserService,
     private apm:AffecterMarchandMarcherService,
     private toastr : ToastrService,
     private mairieService : MairieService, 
     private marcheService : MarcheService,
     private affMarchMar:AffecterMarchandMarcherService,
     private marchandService:MarchandService,
     private dialog:MatDialog,
     ) { }

  ngOnInit(): void {
  this.findAllMarche();
  this.findAllMarchand();
  this.findAllMairie();

  
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
      this.markets=data.response;
      // this.marcheData=this.markets;
      // this.dataSource1 = new MatTableDataSource(this.marcheData);
    })
    
  }

  //select marché
  selectMarket(event:any){
    console.log("marché selectionné", event.value);
    // this.market=event.value;
    this.affMarchMar.findMarchandsByMarche(event.value.idMarcher).subscribe((data : any) => {
        console.log("les marchands presentent dans le marché sélectionné", data);   
        this.listeMarchandsM=data.response;
        console.log("liste marchands d'abord", this.listeMarchandsM);
        

        // gerer les doublons des marchands dans le marché
        if(this.listeMarchandsM.length > 0){
          this.listeMarchandsM.forEach((element : any) => {
            const indexMarchand = this.marchands.findIndex(id => id.id === element.marchand.idMarchand);
            console.log("index", indexMarchand);

            if(indexMarchand > -1){
              console.log("ça existe");
              
            }else{
              this.marchands.push({
                id: element.marchand.idMarchand,
                nom: element.marchand.nomMarchand,
                prenom: element.marchand.prenomMarchand,
                dateOccup: element.marchand.dateOccupationMarchand,
                tel: element.marchand.telephoneMarchand,
              });
            }
            
          });

                  
        }

        console.log("marchands fusionnés", this.marchands);
        this.dataSource = new MatTableDataSource(this.marchands); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.marchands= [];
    },
    err =>{
      console.log(err);
      
    });
  }


findAllMarchand(){
  // la liste des marchands
  this.apm.getAllMarchands().
  subscribe(data =>{
    this.listeMarchands=data.response;
    console.log("marchands", this.listeMarchands);
    
  },
  error=>{
    console.log(error);
    
  });
}


  findAllMarche(){
        // la liste de tous les marchers presents dans la 
    // BD
    this.apu.getAllMarcher()
    .subscribe(data =>{
      this.listeMarcher=data.response;
      console.log("bonsoir",this.listeMarcher);
    }, error=>{
      console.log(error);
      
    });
  }

  // La methode qui est appélé
  //une fois l'evènement declenché
  getSelect(event:any){

    console.log("evenement",event.value);
    console.log("avant affecter", this.place);
    // let valeur=this.event.MatSelectChange.value;
    this.apm.getPlaceByIdMarcherM(event.value.idMarcher).subscribe(
      data=>{
        this.place=data.response;
        console.log("place par id marcher", this.place);
      },error=>{
        console.log(error);
        
      }
      );
}

// Recuperer le marchand séléctionné
getSelectMarchand(eventMar:any){
  this.affecterPlaceMarchand.marchand=eventMar.value;
  console.log("marchand selectionné", this.affecterPlaceMarchand.marchand);
  
}

// Recuperer la place selectionné
getSelectPlace(eventPlace:any){
  this.affecterPlaceMarchand.place=eventPlace.value;
  console.log("marchand selectionné", this.affecterPlaceMarchand.place);
  
}


onSubmit(): void {
 console.log("AffecterPlaceMarchand", this.affecterPlaceMarchand);
this.apm.AffPlaceMarchand(this.affecterPlaceMarchand).subscribe((response:any)=>{
  console.log(response);

  if (response['status']==='OK') {
    this.toastr.success("enreg...",response['message']);
     this.findAllMarchand();
    this.findAllMarche();
   
    
  }
  
})
 
}

// marchand selectionnée
selectMarchand(data:any){
  console.log("le marchand", data);
  this.marchandService.setMarchand(data);

  const dialogRef = this.dialog.open(DetailMarchandComponent, {
    width: '1000px',
    //  data: {name: 'this.name', animal: this.animal}

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    //this.animal = result;
  });
}

}
