import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from '../modules/inventory/inventory.component';
import { LoansAndRepaymentsComponent } from '../modules/loans-and-repayments/loans-and-repayments.component';
import { LoansComponent } from '../modules/loans-and-repayments/loans/loans.component';
import { ConsultsComponent } from '../modules/consults/consults.component';
import { UsersComponent } from '../modules/users/users.component';
import { MapaInteractivoComponent } from '../modules/mapa-interactivo/mapa-interactivo.component';
import { TucansitoGuiaComponent } from '../modules/tucansito-guia/tucansito-guia.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children:[
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'loansAndRepayments',
        component: LoansAndRepaymentsComponent
      },
      {
        path: 'consults',
        component: ConsultsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'loans',
        component: LoansComponent
      },
      {
        path: 'map',
        component:MapaInteractivoComponent
      },
      {
        path:'tucansitoGuia',
        component:TucansitoGuiaComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
