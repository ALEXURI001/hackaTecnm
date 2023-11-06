import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ArchivosService } from '../services/archivos.service';
import { TranslateService } from '@ngx-translate/core';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]

})
export class DashboardComponent {
  showAlert: boolean = true;
  files: File[] = [];
  langs: string[] = [];
  constructor(
    private messageService: MessageService, 
    private archivosService: ArchivosService,
    private translate: TranslateService) {
      this.translate.use('es');
      this.translate.setDefaultLang('es');
      translate.addLangs(['es', 'en']);
      this.langs = this.translate.getLangs();
    }

    cities!: City[];

    selectedCity: string ='es';

    ngOnInit() {
        this.cities = [
            { name: 'Español', code: 'es' },
            { name: 'Ingles', code: 'en' },
        ];
    }

    selectLang(){
      console.log(this.selectedCity);
      
      this.translate.use(this.selectedCity);
    }



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
