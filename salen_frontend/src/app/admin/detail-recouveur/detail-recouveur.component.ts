import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AffecterPlaceRecouvreur } from 'src/app/model/AffecterPlaceRecouvreur';
import { Place } from 'src/app/model/Place';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { AffecterPlaceUserService } from 'src/app/service/affecter-place-user.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-detail-recouveur',
  templateUrl: './detail-recouveur.component.html',
  styleUrls: ['./detail-recouveur.component.scss']
})
export class DetailRecouveurComponent implements OnInit {
  recou: any;
  places: any;
  isChecked:boolean=true;

  displayedColumns: string[] = ['dateOccup', 'numero', 'retrait'];
  dataSource!: MatTableDataSource<Utilisateur>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService:UtilisateurService,
    private affUser:AffecterPlaceUserService,
    ) { 
      console.log("recouvreur",this.userService.getUtilisateur());
      
      this.recou=this.userService.getUtilisateur();
      this.findPlaceByUser();
    }

  ngOnInit(): void {
  }

  findPlaceByUser(){
    this.affUser.findPlaceByRecouvreur(this.recou.id).subscribe((data:any)=>{
      console.log("les places", data);
      this.places=data.response;
      this.dataSource = new MatTableDataSource(this.places);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
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

  removeTrader(data:any){
    // console.log("removing trade...", data.idAffecterPlaceMarchand);
    // this.affMMService.removePlaceToTrader(data.place.idPlace, data.idAffecterPlaceMarchand).subscribe((data:any)=>{
    //   console.log("remove place to trader ...", data);
    //   this.getAllPlaceByMarche();
    // })
    
  }


}
