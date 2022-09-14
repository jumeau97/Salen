import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public utilisateur = { username: '', password: '' };
  constructor(
    private authService:AuthService,
    private router:Router,
    private toastController:ToastController
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.utilisateur.username && this.utilisateur.password) {
      this.authService.login(this.utilisateur).subscribe((ret:any) => {
        console.log('login', ret);
        if (ret['status'] ==='OK') {
          localStorage.setItem('current_session',JSON.stringify(ret['response']));
          this.presentToast(); 
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Connexion reussie.',
      duration: 2000,
      color:"success",
      position:'top'
    });
    toast.present();
  }

}
