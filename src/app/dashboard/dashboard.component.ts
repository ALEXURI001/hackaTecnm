import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ArchivosService } from '../services/archivos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]

})
export class DashboardComponent {
  showAlert: boolean = true;
  files: File[] = [];
  constructor(private messageService: MessageService, private archivosService: ArchivosService) {}



  onSelect(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);
    console.log(this.files[0]);
     
  }

  onSelectFile(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);
    console.log(this.files[0]);
     
  }

  upload(){
    const idUser = JSON.parse(localStorage.getItem('idUser')!);
    let formData = new FormData();
    formData.append('file', this.files[0]);
    console.log(formData);
    this.archivosService.filter(idUser, formData).subscribe((resp) =>{
      console.log(resp);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Foto actualizado con exito' });
     })
  }

/*
   
  
  */
  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }


    
}
