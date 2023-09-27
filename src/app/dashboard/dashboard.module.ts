import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { LoansComponent } from '../modules/loans-and-repayments/loans/loans.component';
import { RepaymentsComponent } from '../modules/loans-and-repayments/repayments/repayments.component';
import { ConsultationComponent } from '../modules/loans-and-repayments/consultation/consultation.component';
import { RenovationsComponent } from '../modules/loans-and-repayments/renovations/renovations.component';
import { InventoryComponent } from '../modules/inventory/inventory.component';
import { LoansAndRepaymentsComponent } from '../modules/loans-and-repayments/loans-and-repayments.component';
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

import { ConsultsComponent } from '../modules/consults/consults.component';
import { UsersComponent } from '../modules/users/users.component';
import { ModalBooksComponent } from '../modules/consults/modal-books/modal-books.component';
import { ModalTesisComponent } from '../modules/consults/modal-tesis/modal-tesis.component';
import { ModalPublicacionesComponent } from '../modules/consults/modal-publicaciones/modal-publicaciones.component';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [
    LoansComponent,
    RepaymentsComponent,
    ConsultationComponent,
    RenovationsComponent,
    InventoryComponent,
    LoansAndRepaymentsComponent,
    ConsultsComponent,
    UsersComponent,
    ModalBooksComponent,
    ModalTesisComponent,
    ModalPublicacionesComponent,
   
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
    SidebarModule
  ]
})
export class DashboardModule { }
