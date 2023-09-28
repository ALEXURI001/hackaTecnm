import { Component, OnInit } from '@angular/core';
import { UbicacionService } from './services/ubicacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'biblioteca';

  constructor(
    private ubicacionService:UbicacionService
  ){}

  ngOnInit(): void {

    this.ubicacionService.obtenerCoordenadas()

 
  }


}
