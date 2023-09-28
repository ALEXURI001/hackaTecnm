import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MapaInteractivoComponent } from '../modules/mapa-interactivo/mapa-interactivo.component';

import { TucansitoGuiaComponent } from '../modules/tucansito-guia/tucansito-guia.component';

import { LugaresCercanosComponent } from '../modules/lugares-cercanos/lugares-cercanos.component';
import { GruposViajerosComponent } from '../modules/grupos-viajeros/grupos-viajeros.component';
import { TucanGuiaComponent } from '../modules/tucan-guia/tucan-guia.component';
import { ChatGrupalComponent } from '../modules/grupos-viajeros/grupos/chat-grupal/chat-grupal.component';


const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children:[
      {
        path: 'map',
        component:MapaInteractivoComponent
      },
      {
        path: 'lugaresCercanos',
        component:LugaresCercanosComponent
      },
      {
        path: 'grupos',
        component:GruposViajerosComponent
      },
      {
        path: 'map',
        component:MapaInteractivoComponent
      },
      {
        path:'tucansitoGuia',
        component:TucansitoGuiaComponent
      },
      {
        path:'chatGrupal/:id',
        component:ChatGrupalComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
