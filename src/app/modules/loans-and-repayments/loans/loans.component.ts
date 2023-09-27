import { Component } from '@angular/core';
import { LoansService } from './loans.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {

  user: FormGroup;

  constructor(
    private serviceLoans: LoansService,
    private fb: FormBuilder
  ) {

    /* INGRESO DE DATOS */
    this.user = this.fb.group({
      noControl: ['', Validators.required],
      noAdquisicion: ['', Validators.required],
    })
  }


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

    const noControl = this.user.value.noControl;
    const noAdquisicion = this.user.value.noAdquisicion;

    const body = {
      noControl,
      noAdquisicion
    }

    console.log(body);

    this.serviceLoans.buscarUser(body).subscribe(
      (result) => {

        if (true) {
          this.nombre = `${result.user?.names} ${result.user?.lastNameFather} ${result.user?.lastNameMother}`;
          // this.noControl = result.user?.controlNo!;
          this.carrera = result.user?.carrera!;

          this.titulo = result.book?.titulo!;
          this.autor = result.book?.autor!;
          this.clasificacion = result.book?.clasificacion!;

          this.fechaSalida = `${new Date()}`;
        }
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o número de Adquisión no encontrado!',
        })

      }
    )


  }


  register() {

    Swal.fire({
      title: 'Estas seguro de guardar el dato?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Guardar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceLoans.saveDate(this.fechaSalida, this.fechaEntrega).subscribe(
          (result) => {

            if (!result.status) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result.message,
              })
              return;
            }

            Swal.fire(
              'Guardado!',
              'Datos guardados correctamente',
              'success'
            )

          }

        )
      }
    }

    )

  }


  cancelar() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }


}
