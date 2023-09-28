import { Component } from '@angular/core';
import { GruposService } from './grupos.service';
import { Datos } from 'src/app/interfaces/grupos.interface';
import { Usuario } from 'src/app/interfaces/modalGroup';
interface City {
  name: string;
}
@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {
  visible: boolean = false;
  visible2: boolean = false;
  grupos: Datos[] = [];
  cities!: City[];

  selectedCity!: City;
  //DATOS GRUPO
  nombreGrupo: string = "";
  destino: string = "";
  usuarios: Usuario[] = [];
  nombre: string = "";

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
];
    this.showAllGroups();
  }
  constructor(private gruposService: GruposService) { }

  showAllGroups(){
    this.gruposService.showGroups().subscribe((respon) =>{

      this.grupos = respon.resp;
      console.log(this.grupos);
    })
  }


  showgroup(grupos: number) {

    this.gruposService.showGroup(grupos).subscribe((resp) =>{
      console.log(resp.resp.nombre);
      this.nombreGrupo = resp.resp.nombre;
      this.destino = resp.resp.destino;
      this.usuarios = resp.resp.usuarios;
      
    })

      console.log(grupos);
      this.visible = true;
  }


  registerGroup(){
    this.visible2 = true;
  }
}
