import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from '../modules/inventory/inventory.component';
import { LoansAndRepaymentsComponent } from '../modules/loans-and-repayments/loans-and-repayments.component';
import { LoansComponent } from '../modules/loans-and-repayments/loans/loans.component';
import { ConsultsComponent } from '../modules/consults/consults.component';
import { UsersComponent } from '../modules/users/users.component';

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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
