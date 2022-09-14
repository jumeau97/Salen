import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public utilisateur = { username: '', password: '' };
  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  login() {
    if (this.utilisateur.username && this.utilisateur.password) {
      this.authService.login(this.utilisateur).subscribe((ret:any) => {
        console.log('login', ret);
        if (ret['status'] ==='OK') {
          localStorage.setItem('current_session',JSON.stringify(ret['response'])); 
          this.router.navigate(['/admin']);
        } else {
          console.log('error')
        }
      },
        error => { console.log('error', error) });
    } else { console.log('Veuillez renseigner les champs svp') }
  }

  lo() {
    this.router.navigate(['/admin']);

  }
}
