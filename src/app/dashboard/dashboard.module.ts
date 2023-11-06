import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { MapaInteractivoComponent } from '../modules/mapa-interactivo/mapa-interactivo.component';
import { GruposViajerosComponent } from '../modules/grupos-viajeros/grupos-viajeros.component';
import { LugaresCercanosComponent } from '../modules/lugares-cercanos/lugares-cercanos.component';
import { TucanGuiaComponent } from '../modules/tucan-guia/tucan-guia.component';
import { ViajeroComponent } from '../modules/grupos-viajeros/viajero/viajero.component';
import { GruposComponent } from '../modules/grupos-viajeros/grupos/grupos.component';
import { CardModule } from 'primeng/card';
import { SwiperModule } from 'swiper/angular';
import { ChatGrupalComponent } from '../modules/grupos-viajeros/grupos/chat-grupal/chat-grupal.component';
import { AvatarGroupModule } from "primeng/avatargroup";
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { NgxDropzoneModule } from 'ngx-dropzone';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    GruposViajerosComponent,
    LugaresCercanosComponent,
    TucanGuiaComponent,
    ViajeroComponent,
    GruposComponent,
    ChatGrupalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    PasswordModule,
    InputSwitchModule,
    SelectButtonModule,
    SidebarModule,
    CardModule,
    SwiperModule,
    TabViewModule,
    ScrollPanelModule,
    AvatarModule,
    AvatarGroupModule,
    OverlayPanelModule,
    NgxDropzoneModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (HttpLoaderFactory),
          deps: [HttpClient]
      }
  }),

  ]
})
export class DashboardModule { }
