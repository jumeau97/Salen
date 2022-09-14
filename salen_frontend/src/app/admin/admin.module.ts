import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbartopComponent } from '../navbartop/navbartop.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MairieComponent } from '../mairie/mairie.component';
import { MarcheComponent } from '../marche/marche.component';
import { NewmairieComponent } from '../newmairie/newmairie.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { UtilisateurComponent } from '../utilisateur/utilisateur.component';
import { NewutilisateurComponent } from '../newutilisateur/newutilisateur.component';
import { NewmarchandComponent } from '../newmarchand/newmarchand.component';
import { MarchandComponent } from '../marchand/marchand.component';
import { NewmarcheComponent } from '../newmarche/newmarche.component';
import { MarchandMarcheComponent } from '../marchand-marche/marchand-marche.component';
import { RecouvreurMarcheComponent } from '../recouvreur-marche/recouvreur-marche.component';
import { ModifiermairieComponent } from '../modifier/modifiermairie/modifiermairie.component';
import { UpdatemarcherComponent } from '../updatemarcher/updatemarcher.component';
import { UpdateutilisateurComponent } from '../updateutilisateur/updateutilisateur.component';
import { UpdateMarchandComponent } from '../update/update-marchand/update-marchand.component';

// import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PlaceMarcheComponent } from '../place-marche/place-marche.component';
import { RecouvrementDaysComponent } from '../recouvrement-days/recouvrement-days.component';
import { TicketComponent } from '../ticket/ticket.component';
import { EtatPaiementComponent } from '../etat-paiement/etat-paiement.component';
import { DetailPaiementComponent } from '../detail-paiement/detail-paiement.component';
import { PlaceAndMarcheComponent } from '../Gestion/place-and-marche/place-and-marche.component';
import { DetailsPlaceComponent } from './details-place/details-place.component';
import { DetailMarchandComponent } from './detail-marchand/detail-marchand.component';
import { DetailRecouveurComponent } from './detail-recouveur/detail-recouveur.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DetailDayPayComponent } from './detail-day-pay/detail-day-pay.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    NavbartopComponent,
    SidebarComponent,
    MairieComponent,
    MarcheComponent,
    NewmairieComponent,
    AccueilComponent,
    UtilisateurComponent,
    NewutilisateurComponent,
    NewmarchandComponent,
    MarchandComponent,
    NewmarcheComponent,
    MarchandMarcheComponent,
    RecouvreurMarcheComponent,
    ModifiermairieComponent,
    UpdatemarcherComponent,
    UpdateutilisateurComponent,
    UpdateMarchandComponent,
    PlaceMarcheComponent,
    RecouvrementDaysComponent,
    TicketComponent,
    EtatPaiementComponent,
    DetailPaiementComponent,
    PlaceAndMarcheComponent,
    DetailsPlaceComponent,
    DetailMarchandComponent,
    DetailRecouveurComponent,
    DetailDayPayComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,  
    ToastrModule . forRoot ( ) ,  
    NgxSpinnerModule, 
    
  ],
  providers: [DatePipe],
})
export class AdminModule { }
