import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Paiement } from 'src/app/model/Paiement';

@Component({
  selector: 'app-detail-day-pay',
  templateUrl: './detail-day-pay.component.html',
  styleUrls: ['./detail-day-pay.component.scss']
})
export class DetailDayPayComponent implements OnInit {

  displayedColumns: string[] = ['numPlace'];
  dataSource !: MatTableDataSource<Paiement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data : any) 
  { 
    console.log("data", this.data);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    
  }

}
