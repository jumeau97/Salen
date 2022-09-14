import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Payement } from '../model/Payement';
import { PaiementService } from '../service/paiement/paiement.service';
import { PlaceService } from '../service/place/place.service';

@Component({
  selector: 'app-detail-paiement',
  templateUrl: './detail-paiement.component.html',
  styleUrls: ['./detail-paiement.component.scss']
})
export class DetailPaiementComponent implements OnInit {
  place:any;
  detailPay: any;

  displayedColumns: string[] = ['dateRecou', 'etat'];
  dataSource!: MatTableDataSource<Payement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private placeService:PlaceService,
    private paiementService:PaiementService,
  ) { }

  ngOnInit(): void {
    console.log("place recuperée", this.placeService.getPlace());
    this.place=this.placeService.getPlace();
    
    
     this.getAllPayementPlace();
  }

  getAllPayementPlace(){
    console.log("la place après get", this.place);
    this.paiementService.getAllPayPlace(this.place).subscribe((data:any) =>{
      console.log("aff...", data);
      this.detailPay=data.response;
      this.dataSource=new MatTableDataSource(this.detailPay);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
