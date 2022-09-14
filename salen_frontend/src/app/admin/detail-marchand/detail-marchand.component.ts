import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AffecterPlaceMarchands } from 'src/app/model/AffecterPlaceMarchand';
import { Marchand } from 'src/app/model/Marchand';
import { AffecterMarchandMarcherService } from 'src/app/service/affecter-marchand-marcher.service';
import { MarchandService } from 'src/app/service/marchand.service';

@Component({
  selector: 'app-detail-marchand',
  templateUrl: './detail-marchand.component.html',
  styleUrls: ['./detail-marchand.component.scss']
})
export class DetailMarchandComponent implements OnInit {
  marchand: any;
  places: any;
  isChecked:boolean=true;

  displayedColumns: string[] = ['dateOccup', 'numero', 'retrait'];
  dataSource!: MatTableDataSource<Marchand>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private affMMService:AffecterMarchandMarcherService,
    private marchandService:MarchandService,
  ) {
    console.log("marchand recupere", this.marchandService.getMarchand());
    
    this.marchand=this.marchandService.getMarchand();
    this.getAllPlaceByMarche();
   }

  ngOnInit(): void {
  }

  getAllPlaceByMarche(){
    this.affMMService.findPlaceByMarchand(this.marchand.id).subscribe((data:any)=>{
      console.log("la liste des places", data);
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

  // remove trader method
  removeTrader(data:any){
    console.log("removing trade...", data.idAffecterPlaceMarchand);
    this.affMMService.removePlaceToTrader(data.place.idPlace, data.idAffecterPlaceMarchand).subscribe((data:any)=>{
      console.log("remove place to trader ...", data);
      this.getAllPlaceByMarche();
    })
    
  }
}
