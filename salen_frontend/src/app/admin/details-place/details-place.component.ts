import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Place } from 'src/app/model/Place';
import { MarcheService } from 'src/app/service/marche.service';
import { PlaceService } from 'src/app/service/place/place.service';


@Component({
  selector: 'app-details-place',
  templateUrl: './details-place.component.html',
  styleUrls: ['./details-place.component.scss']
})


export class DetailsPlaceComponent implements OnInit {
  marche: any;
  place: any;
  isChecked:boolean=true;

  displayedColumns: string[] = ['numero', 'recouvreur', 'marchand'];
  dataSource!: MatTableDataSource<Place>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  users: any=[];

  constructor(
    private marcheService:MarcheService,
    private placeService:PlaceService,
  ) {
    console.log("marche recuperée", this.marcheService.getMarche());
    this.marche=this.marcheService.getMarche();
    
    
     this.getAllPlaceByMarche();
   
   }

  ngOnInit(): void {
  }

  getAllPlaceByMarche(){
    this.placeService.getPlaceByMarche(this.marche.idMarcher).subscribe((data:any)=>{
      console.log("la liste des places", data);
      this.place=data.response;
      this.dataSource = new MatTableDataSource(this.place);
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

  checkbutton(){
    console.log("ma check");
    
  }
}


