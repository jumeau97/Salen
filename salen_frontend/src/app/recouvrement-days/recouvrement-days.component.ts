import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recouvrement-days',
  templateUrl: './recouvrement-days.component.html',
  styleUrls: ['./recouvrement-days.component.scss']
})
export class RecouvrementDaysComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  betweenDate(event:any){
     console.log(event);
    
  }

}
