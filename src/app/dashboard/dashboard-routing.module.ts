import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from '../modules/users/users.component';
import { MapaInteractivoComponent } from '../modules/mapa-interactivo/mapa-interactivo.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children:[

      {
        path: 'loansAndRepayments',
      },
      {
        path: 'users',
        component: UsersComponent
      },

      {
        path: 'loans',
        component: LoansComponent
      },{
        path: 'map',
        component:MapaInteractivoComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
