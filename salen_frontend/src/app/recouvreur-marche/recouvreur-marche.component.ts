import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AffecterPlaceUserService } from '../service/affecter-place-user.service';
import {FormControl} from '@angular/forms';
import { AffecterPlaceRecouvreur } from '../model/AffecterPlaceRecouvreur';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MarcheService } from '../service/marche.service';
import { Utilisateur } from '../interface/Utilisateur';
import { MairieService } from '../service/mairie.service';
import { DetailRecouveurComponent } from '../admin/detail-recouveur/detail-recouveur.component';
import { UtilisateurService } from '../service/utilisateur.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recouvreur-marche',
  templateUrl: './recouvreur-marche.component.html',
  styleUrls: ['./recouvreur-marche.component.scss']
})
export class RecouvreurMarcheComponent implements OnInit {
  marcher:[]=[];
  toppings = new FormControl();

  listeMarcher:any;
  listeRecouvreur:any;
  place:any; event:any; eventRec:any;
  affecterPlaceRecouvreur:AffecterPlaceRecouvreur=new AffecterPlaceRecouvreur();


  displayedColumns: string[] = ["nomM","prenomM","numeroPlace", "action"];
  dataSource!: MatTableDataSource<Utilisateur>;
 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  markets: any;
  listeRecousM: any;
  recouvreurs: any[]=[];
  mairies: any;

  constructor(
    private http:HttpClient,
     private apu:AffecterPlaceUserService,
    private toastr:ToastrService,
    private marcheService:MarcheService,
    private affRecouMarheService : AffecterPlaceUserService,
    private mairieService : MairieService,
    private userService: UtilisateurService,
    private dialog:MatDialog,
    ) { }

  ngOnInit(): void {

   this.findAllMarket();

// la liste des recouvreurs
    this.findAllRecouvreur();
    this.findAllMairie();
  }

  
    // tous les mairie
    findAllMairie(){
      this.mairieService.findAllMairie().subscribe((data:any)=>{
        console.log("la liste de toutes les mairie", data);
        this.mairies=data.response;
        
      });
  
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
    this.affRecouMarheService.findRecouByMarche(event.value.idMarcher).subscribe((data : any) => {
        console.log("les recouvreur presentent dans le marché sélectionné", data);   
        this.listeRecousM=data.response;
        console.log("liste recouvreurs d'abord", this.listeRecousM);
        

        // gerer les doublons des marchands dans le marché
        if(this.listeRecousM.length > 0){
          this.listeRecousM.forEach((element : any) => {
            const indexMarchand = this.recouvreurs.findIndex(id => id.id === element.utilisateur.idUtilisateur);
            console.log("index", indexMarchand);

            if(indexMarchand > -1){
              console.log("ça existe");
              
            }else{
              this.recouvreurs.push({
                id: element.utilisateur.idUtilisateur,
                nom: element.utilisateur.nomUtilisateur,
                prenom: element.utilisateur.prenomUtilisateur,
                email: element.utilisateur.emailUtilisateur,
                tel: element.utilisateur.telephoneUtilisateur,
              });
            }
            
          });

                  
        }

        console.log("recouvreurs fusionnés", this.recouvreurs);
        this.dataSource = new MatTableDataSource(this.recouvreurs); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.recouvreurs= [];
    },
    err =>{
      console.log(err);
      
    });
  }

  findAllRecouvreur(){
    this.apu.getListeUserByRecouvreur()
    .subscribe(data =>{
      this.listeRecouvreur=data.response;
      console.log("bonjour",this.listeRecouvreur)
    }, error=>{
      console.log(error);
      
    });
  }

  findAllMarket(){
    this.apu.getAllMarcher()
    .subscribe(data =>{
      this.listeMarcher=data.response;
      console.log("bonsoir",this.listeMarcher)
    }, error=>{
      console.log(error);
      
    });
  }
// Recuperer la place en fonction du marché selectionné
  getSelect(event:any){

      console.log("evenement",event.value);
      console.log("avant affecter", this.place);
      // let valeur=this.event.MatSelectChange.value;
      this.apu.getPlaceByIdMarcher(event.value.idMarcher).subscribe(
        data=>{
          this.place=data.response;
          console.log("place par id marcher", this.place);
        },error=>{
          console.log(error);
          
        }
        );

 

  }
//  Recuperer le/les places selectionnées
  getSelectPlace(event:any){
      console.log("evenement place", event.value);
      this.affecterPlaceRecouvreur.place=event.value;
     
  }
//  Recuperer le recouvreur selectionné
  getSelectRec(eventRec:any){
    console.log("evenement recouvreur",eventRec.value);
    
    this.affecterPlaceRecouvreur.utilisateur=eventRec.value;
  }

  showSuccess() {
    this.toastr.success('Enregi', 'Toastr fun!');
  }

  affecterutilisateur(){
    console.log("Affectation",this.affecterPlaceRecouvreur);
    this.apu.addAffecterRecouvreur( this.affecterPlaceRecouvreur).subscribe((res:any) =>{
      console.log(res);
      if(res['status'] ==='OK'){
        this.toastr.success("enreg...",res['message']);
        this.findAllMarket();
        this.findAllRecouvreur();

        // this.affecterPlaceRecouvreur = new AffecterPlaceRecouvreur();
      }
      
    });
    
  }

  selectRecou(data:any){
    console.log("recouvrer", data);
    this.userService.setUtilisateur(data);
    const dialogRef = this.dialog.open(DetailRecouveurComponent, {
      width: '1000px',
      //  data: {name: 'this.name', animal: this.animal}
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  
      
  }
  



//   groupByFonction(data:any[]) {
//     var groupByMarcher:any={};

//   data.forEach(a => {
//   // console.log(a.place);

//   groupByMarcher [a.place.marcher.idMarcher] = groupByMarcher [a.place.marcher.idMarcher] || [];
//   groupByMarcher [a.place.marcher.idMarcher].push({
//      date: a.date,
//      libelleMarcher: a.place.marcher.libelleMarcher,
//      numeroPlace: a.place.numeroPlace,
//     });
// });

// console.log('groupByMarcher', groupByMarcher);
//   }

}
