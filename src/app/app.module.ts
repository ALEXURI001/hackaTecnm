import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';


import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';

import { MapaInteractivoComponent } from './modules/mapa-interactivo/mapa-interactivo.component';
import {GoogleMapsModule} from '@angular/google-maps'; 


import { ButtonNavigationBarComponent } from './components/button-navigation-bar/button-navigation-bar.component';
import { DockModule } from 'primeng/dock';

import { TucansitoGuiaComponent } from './modules/tucansito-guia/tucansito-guia.component';

import { GruposComponent } from './modules/grupos-viajeros/grupos/grupos.component';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    NavbarComponent,
    ButtonNavigationBarComponent,

     TucansitoGuiaComponent,
    

    


    MapaInteractivoComponent,
                      
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    PasswordModule,
    InputTextModule,
    SidebarModule,
    GoogleMapsModule,
    DialogModule,
    InputSwitchModule,
    DockModule

  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
