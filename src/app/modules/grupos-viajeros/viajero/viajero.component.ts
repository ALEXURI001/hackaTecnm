import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViajeroService } from './viajero.service';
import { Resultado } from 'src/app/interfaces/usuariosAll.interface';
import { environment } from 'src/enviroments/environment';

interface City {
  name: string;
}

@Component({
  selector: 'app-viajero',
  templateUrl: './viajero.component.html',
  styleUrls: ['./viajero.component.css']
})
export class ViajeroComponent {
  visible: boolean = false;

  cities!: City[];
  url= `${environment.urlBase}/images/`;
  selectedCity!: City;

  resultados: Resultado[] = [];

    constructor(private viajeroService: ViajeroService) { }

  ngOnInit() { 
    this.cities = [
      {name: 'Aguascalientes'},
      {name: 'Baja California'},      
      {name: 'Baja California Sur'},
      {name: 'Campeche'},
      {name: 'Coahuila'},
      {name: 'Colima'},
      {name: 'Chiapas'},
      {name: 'Chihuahua'},
      {name: 'Durango'},
      {name: 'Distrito Federal'},
      {name: 'Guanajuato'},
      {name: 'Guerrero'},
      {name: 'Hidalgo'},
      {name: 'Jalisco'},
      {name: 'México'},
      {name: 'Michoacán'},
      {name: 'Morelos'},
      {name: 'Nayarit'},
      {name: 'Nuevo León'},
      {name: 'Oaxaca'},
      {name: 'Puebla'},
      {name: 'Querétaro'},
      {name: 'Quintana Roo'},
      {name: 'San Luis Potosí'},
      {name: 'Sinaloa'},
      {name: 'Sonora'},
      {name: 'Tabasco'},
      {name: 'Tamaulipas'},
      {name: 'Tlaxcala'},
      {name: 'Veracruz'},
      {name: 'Yucatán'},
      {name: 'Zacatecas'},
    ]
    this.showUser();
  }

  showUser(){
    this.viajeroService.viewUsers().subscribe(
      (resp) => {
          this.resultados = resp.resultado;
          console.log(this.resultados);
      }
      )
    
  }

  filter(){
    this.viajeroService.filter(this.selectedCity.name).subscribe(
      (resp) =>{
        console.log(resp);
        this.resultados = resp.resultado;
        console.log(this.resultados);

      }
    )
  }

  showTraveler() {
      this.visible = true;
  }
}
