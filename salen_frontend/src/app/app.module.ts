import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GeneralComponent } from './general/general.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from 'src/guards/auth.guard';
import { AdminGuard } from 'src/guards/admin.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    GeneralComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    BrowserAnimationsModule,


  ],
  providers: [AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
