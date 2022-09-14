import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/guards/admin.guard';
import { AccueilComponent } from '../accueil/accueil.component';
import { EtatPaiementComponent } from '../etat-paiement/etat-paiement.component';
import { PlaceAndMarcheComponent } from '../Gestion/place-and-marche/place-and-marche.component';
// import { AdminGuard } from 'src/guards/admin.guard';
import { MairieComponent } from '../mairie/mairie.component';
import { MarchandMarcheComponent } from '../marchand-marche/marchand-marche.component';
import { MarchandComponent } from '../marchand/marchand.component';
import { MarcheComponent } from '../marche/marche.component';
import { ModifiermairieComponent } from '../modifier/modifiermairie/modifiermairie.component';
import { NewmairieComponent } from '../newmairie/newmairie.component';
import { NewmarchandComponent } from '../newmarchand/newmarchand.component';
import { NewmarcheComponent } from '../newmarche/newmarche.component';
import { NewutilisateurComponent } from '../newutilisateur/newutilisateur.component';
import { PlaceMarcheComponent } from '../place-marche/place-marche.component';
import { RecouvrementDaysComponent } from '../recouvrement-days/recouvrement-days.component';
import { RecouvreurMarcheComponent } from '../recouvreur-marche/recouvreur-marche.component';
import { TicketComponent } from '../ticket/ticket.component';
import { UpdateMarchandComponent } from '../update/update-marchand/update-marchand.component';
import { UpdatemarcherComponent } from '../updatemarcher/updatemarcher.component';
import { UpdateutilisateurComponent } from '../updateutilisateur/updateutilisateur.component';
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: "mairie", component: MairieComponent
      },
      {
        path: "affplacemarche", component: PlaceMarcheComponent
      },
      {
        path: "newmairie", component: NewmairieComponent
      },
      {
        path:"newmarchand", component:NewmarchandComponent
      },
      {
        path:"marchand", component:MarchandComponent
      },
      {
        path:"newmarche", component:NewmarcheComponent
      },
      {
        path:"marche", component:MarcheComponent
      },
      {
        path:"updateMarcher/:id", component:UpdatemarcherComponent
      },
      {
        path:"newutilisateur", component:NewutilisateurComponent
      },
      {
        path:"utilisateur", component:UtilisateurComponent
      },
      {
        path:"recouvreur-marche", component:RecouvreurMarcheComponent
      },
      {
        path:"marchand-marche", component:MarchandMarcheComponent
      },

      {
        path:"modifiermairie/:id", component:ModifiermairieComponent
      },
      {
        path:"updateMarchand/:id", component:UpdateMarchandComponent
      },
      {
        path:"updateUtilisateur/:id", component:UpdateutilisateurComponent
      },
      {
        path:"", component:AccueilComponent
      },
      {
        path:"add/days-recouvrement", component:RecouvrementDaysComponent
      },{
        path:"etat/paiement", component:EtatPaiementComponent
      },
      {
        path:"ticket", component:TicketComponent
      },
      {
        path:"pack/place-marche",
        component:PlaceAndMarcheComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
