import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Marchand } from '../interface/Marchand';
import { MarchandService } from '../service/marchand.service';


@Component({
  selector: 'app-marchand',
  templateUrl: './marchand.component.html',
  styleUrls: ['./marchand.component.scss']
})
export class MarchandComponent implements OnInit {
  userData: Marchand[] = [];
  displayedColumns: string[] = ['nomMarchand', 'prenomMarchand', 'telephoneMarchand', 'dateOccupationMarchand','action'];
  dataSource!: MatTableDataSource<Marchand>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public listeMarchand : any[]=[];
  constructor(private marchandservice:MarchandService, private http:HttpClient, private route:Router) { 
     
  }

  ngOnInit(): void {
    this.listeMarchands();
    
    // console.log(this.listeMarchand);
  }

  listeMarchands(){
    this.marchandservice.getAllMarchand()
    .subscribe(data =>{
      this.listeMarchand=data.response;
       console.log(this.listeMarchand);

      this.userData=this.listeMarchand;


       console.log("OK",this.userData);
       this.dataSource = new MatTableDataSource(this.userData);
      //  for(let i=0; i < this.listeMarchand.length; i++){
      //   this.userData.push( {
      //     nomMarchand:this.listeMarchand[i].nomMarchand,
      //     prenomMarchand:this.listeMarchand[i].prenomMarchand,
      //     telephoneMarchand:this.listeMarchand[i].telephoneMarchand,
      //     dateOccupationMarchand:this.listeMarchand[i].dateOccupationMarchand
      //    });
      //  }
       
    }, error=>{
      console.log(error);
      
    });
  }

  onDelete(marchand:any){
    let confirmation = confirm("Etes Vous Sure !!!!");
    if(confirmation){
      console.log(marchand);
      this.marchandservice.deleteMarchand(marchand.idMairie)
      .subscribe(data =>{
       this.ngOnInit();
      }, error=>{
        console.log(error);
        
      });
    }
  }

  onUpdate(marchand:any){
    let id=marchand.idMarchand
    this.route.navigateByUrl("updateMarchand/"+ id);
    console.log(btoa(id))

  }
  // =============================



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

  // =============================

  

}
