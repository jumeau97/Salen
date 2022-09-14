import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Marchand } from '../interface/Marchand';
import { Marche } from '../interface/Marche';
import { MarcheService } from '../service/marche.service';

@Component({
  selector: 'app-marche',
  templateUrl: './marche.component.html',
  styleUrls: ['./marche.component.scss']
})
export class MarcheComponent implements OnInit {
  marcheData: Marche[] = [];
  displayedColumns: string[] = ['libelle', 'mairie','action'];
  dataSource! : MatTableDataSource<Marche>;

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  public listeMarcher : any;
   public listeMairie : any;
  currentUser: any;

  constructor(private marcherservice:MarcheService, private http:HttpClient, private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('curent user',this.currentUser);
  }

  ngOnInit(): void {

    this.listeMarches();
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

  listeMarches(){
    this.marcherservice.getAllMarche()
    .subscribe(data =>{
      this.listeMarcher=data.response;
      console.log(this.listeMarcher);
      this.marcheData=this.listeMarcher;


      console.log("OK",this.marcheData);
      this.dataSource = new MatTableDataSource(this.marcheData);
    }, error=>{
      console.log(error);
      
    });
  }

  onDelete(marcher:any){
    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      console.log(marcher);
      this.marcherservice.deleteMarcher(marcher.idMarcher)
      .subscribe(data =>{
       this.ngOnInit();
      }, error=>{
        console.log(error);
        
      });
    }
  }

  onUpdate(marcher:any){
    let id=marcher.idMarcher
    this.router.navigateByUrl("updateMarcher/"+ id);
    console.log(btoa(id))

  }

}
