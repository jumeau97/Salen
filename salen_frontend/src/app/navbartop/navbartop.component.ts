import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbartop',
  templateUrl: './navbartop.component.html',
  styleUrls: ['./navbartop.component.scss']
})
export class NavbartopComponent implements OnInit {

  constructor(private router:Router) { }

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
