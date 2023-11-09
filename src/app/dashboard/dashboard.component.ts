import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ArchivosService } from '../services/archivos.service';
import { TranslateService } from '@ngx-translate/core';
import { ViajeroService } from '../modules/grupos-viajeros/viajero/viajero.service';
import { UserService } from '../components/navbar/user.service';

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
  filess: File[] = [];
  langs: string[] = [];
  status!: boolean;
  constructor(
    private messageService: MessageService, 
    private archivosService: ArchivosService,
    private viajeroService: ViajeroService,
    private userService: UserService,
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
    this.loadStatus();
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
    this.filess.push(...event.addedFiles);
    console.log(this.files[0]);
     
  }

  onSelectFileee(event: { addedFiles: any; }) {
    this.files.push(...event.addedFiles);
    console.log(this.files[0]);
     
  }

  loadStatus(){
    const idUser = JSON.parse(localStorage.getItem('idUser')!);

    this.userService.getUsers(idUser).subscribe((resp) => {
      this.status = resp.Resultado.status;
    })
  }


  upload(){
    const idUser = JSON.parse(localStorage.getItem('idUser')!);
    let formData = new FormData();
    formData.append('file', this.files[0]);
    console.log(formData);
    this.archivosService.filter(idUser, formData).subscribe((resp) =>{
      console.log(resp);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Foto actualizado con exito' });
      this.status = true;
      this.viajeroService.updateStatus(idUser, this.status).subscribe( (resp) => {console.log(resp);
      this.loadStatus();
      });
     })
    

    
     
  }

/*
   
  
  */
  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }


    
}