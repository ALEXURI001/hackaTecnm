import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-renovations',
  templateUrl: './renovations.component.html',
  styleUrls: ['./renovations.component.css']
})
export class RenovationsComponent {

  userRenovation: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

    /* INGRESO DE DATOS */
    this.userRenovation = this.fb.group({
      noControl: ['', Validators.required],
      noAdquisicion: ['', Validators.required],
    })
  }

    /* INGRESO DE DATOS */
    noControl:string="";
    noAdquision:string="";
  
  
    /* DATOS DEL PRESTARIO */
    nombre:string="";
    carrera:string="";
  
    /* DATOS DEL LIBRO */
    titulo:string="";
    autor:string="";
    clasificacion:string="";
  
    /* FECHAS */
    fechaEntrega:string="";
    fechaSalida: string="";
    renovacionReciente: string="";
    noRenovaciones: string="";
    renovarFecha: string="";
  
  

     
    
  
    search(){
      const noControl = this.userRenovation.value.noControl;
      const noAdquisicion = this.userRenovation.value.noAdquisicion;
  
      const body = {
        noControl,
        noAdquisicion
      }
  
      console.log(body);
    
    }

    renovar(){}
    
    cancelar(){
      
    }

}
