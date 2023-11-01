import { Injectable } from '@angular/core';

interface Cities{
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GruposViajerosService {

constructor() { }

cities : Cities[] = [
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

getEstados(){return this.cities}

}
