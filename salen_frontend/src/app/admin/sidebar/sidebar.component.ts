import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUser: any;
  constructor(private router:Router) { 
    console.log('curent avant user',this.currentUser);

    this.currentUser = JSON.parse(localStorage.getItem('current_session')!);
    console.log('curent user',this.currentUser);
    
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('current_session');
    localStorage.removeItem('cour');
    localStorage.removeItem('current-token');
    this.router.navigate(['/login']);
    // this.toast.info("Déconnexion")
  }

}
