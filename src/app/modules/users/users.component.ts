import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Analista, Rol } from './users.interface';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService]
})
export class UsersComponent {

  usuarios: Analista[] = []

  newUserDialog!: boolean;
  checked! : number;

  Roles!: Rol[];
  rolUser!: number;
  tipo: string = "Admin";
  clonedUsers: { [s: string]: Analista } = {};

  renewPassword: string = "";

  /*CAMPOS DE NUEVO USUARIO */
  name: string = "";
  nameUser: string = "";
  contrasena: string = "";
  stateOptions: any[] = [{label: 'Off', value: 0}, {label: 'On', value: 1}];


  constructor(
    private serviceUser: UsersService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.listUsers();
    
    this.Roles = [
      { label: 'Servicio-Residencia', value: 0 },
      { label: 'Admin', value: 1 }

    ];

  }


  /*MUESTREO DE USUARIOS */
  listUsers() {
    this.serviceUser.Usuarios().subscribe(
      (result) => {
        if (result.status) {
          this.usuarios = result.analistas;
        }
      }

    )
  }


  /* EDITAR */
  onRowEditInit(users: Analista) {
    console.log(users);
    this.clonedUsers[users.Analista_ID] = { ...users };
  }



  /*GUARDAR DATOS*/

  onRowEditSave(users: Analista) {
    delete this.clonedUsers[users.Analista_ID];
    if (users.Nombre == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo de Nombre Vacio' });
    }
    else if (users.NombreUsuario == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo de Usuario Vacio' });
    }

    else {
      this.serviceUser.UpdateUser(users.Analista_ID, users.Nombre, this.rolUser, users.NombreUsuario).subscribe((result) => {

        if(this.renewPassword!){
          this.serviceUser.UpdatePassword(users.Analista_ID, this.renewPassword).subscribe((res) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: `${res.mensaje}` });
          })
         }

        if (result.status) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: `${result.mensaje}` });
          this.listUsers();
        }
      });
    }
    this.listUsers();
  }

  /* CANCELAR EDITACION */
  onRowEditCancel(users: Analista, index: number) {
    this.usuarios[index] = this.clonedUsers[users.Analista_ID];
    delete this.clonedUsers[users.Analista_ID];
  }


/*ELIMINAR USER */

  onRowEditDelete(users : Analista ) {
    
    console.log(users.Activo);
    
    if(users.Activo === 1){

      Swal.fire({
        title: '¿Está seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, Activar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceUser.DeleteUser(users.Analista_ID,users.Activo).subscribe((result)=>{
        
            if (result.status) {
              this.messageService.add({ severity: 'info', summary: 'Success', detail: `${result.mensaje}` });
              this.listUsers();
            }
            else{
              this.messageService.add({ severity: 'error', summary: 'Error', detail: `${result.mensaje}` });
              this.listUsers();
            }
          })
        }
      
  
      })

    }
    else if(users.Activo === 0){
      Swal.fire({
        title: '¿Está seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, Desactivar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceUser.DeleteUser(users.Analista_ID,users.Activo).subscribe((result)=>{
        
            if (result.status) {
              this.messageService.add({ severity: 'info', summary: 'Success', detail: `${result.mensaje}` });
              this.listUsers();
            }
            else{
              this.messageService.add({ severity: 'error', summary: 'Error', detail: `${result.mensaje}` });
              this.listUsers();
            }
          })
        }
      
  
      })
    }
    
  }


  registerUser() {
    if (this.name == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo de Nombre Vacio' });
    }
    else if (this.nameUser == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo de Usuario Vacio' });
    }
    else if (this.contrasena == "") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Campo de Contraseña Vacio' });
    }

    else {
      this.serviceUser.RegisterUser(this.name, this.rolUser, this.nameUser, this.contrasena).subscribe((result) => {

        if (result.status) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: `${result.mensaje}` });
          this.hideDialog();
          this.name = ""; this.nameUser = ""; this.contrasena = "";
          this.listUsers();
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `${result.mensaje}` });
          this.nameUser = "";
        }
      });
    }
    this.listUsers();
  }

  /* MODALES */

  showDialogNewUser() {
    this.newUserDialog = true;
  }

  hideDialog() {
    this.newUserDialog = false;

  }

}
