import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-repayments',
  templateUrl: './repayments.component.html',
  styleUrls: ['./repayments.component.css']
})
export class RepaymentsComponent {

  userDevoluciones: FormGroup;

  constructor(

    private fb: FormBuilder
  ) {

    /* INGRESO DE DATOS */
    this.userDevoluciones = this.fb.group({
      noControl: ['', Validators.required],
      noAdquisicion: ['', Validators.required],
    })
  }


  /* INGRESO DE DATOS */
  noControl: string = "";
  noAdquision: string = "";


  /* DATOS DEL PRESTARIO */
  nombre: string = "";
  carrera: string = "";

  /* DATOS DEL LIBRO */
  titulo: string = "";
  autor: string = "";
  clasificacion: string = "";

  /* FECHAS */
  fechaEntrega: string = "";
  fechaSalida: string = "";


  search() {
    const noControl = this.userDevoluciones.value.noControl;
    const noAdquisicion = this.userDevoluciones.value.noAdquisicion;

    const body = {
      noControl,
      noAdquisicion
    }

    console.log(body);
  }

  devolver() {

  }

  cancelar() {

  }


}
