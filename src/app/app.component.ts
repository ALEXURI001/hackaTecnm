import { Component, OnInit } from '@angular/core';
import { UbicacionService } from './services/ubicacion.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  title = 'biblioteca';

  constructor(
    private ubicacionService:UbicacionService,
    private translate: TranslateService
  ){
   
  }

  
  ngOnInit(): void {

    this.ubicacionService.obtenerCoordenadas()

 
  }


}
