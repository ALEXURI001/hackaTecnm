import { Component, OnInit, ViewChild } from '@angular/core';
import { MapaService } from './mapa.service';
import { GetLugares } from 'src/app/interfaces/lugares.interface';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { environment } from 'src/enviroments/environment';

@Component({
  selector: 'app-mapa-interactivo',
  templateUrl: './mapa-interactivo.component.html',
  styleUrls: ['./mapa-interactivo.component.css']
})
export class MapaInteractivoComponent implements OnInit{

  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap| undefined;
  
  
  lugares: any[] =[]

  center = {lat: 16.7585991, lng: -93.1731847};

  //Mostrar en la tarjeta al seleccionar un marcador
  titulo=''
  descripcion=''
  links=''
  id=''
  imagenes: any[]=[]
  imagenes2: any[]=[]
  horario=''
  direccion= ''


  zoom = 12;
  display?: google.maps.LatLngLiteral;

  constructor(
    private mapaService: MapaService
  ){
  }


  ngOnInit(): void {

    this.getAllArtesanos()

  } 

  

  getAllArtesanos(){

    this.mapaService.getLugares().subscribe(
      (resp:any)=>{
        
          this.lugares= resp.resultado
      }
    )

  }


  openInfoWindow(marker: any, content: any) {
    
    console.log(content)

    this.id=            content.id
    this.titulo =       content.nombre
    this.horario =      content.horario

    this.imagenes= content.imagenes

    this.imagenes.forEach(element => {
      
      let direccion= environment.urlBase+'/images/'+element
      this.imagenes2.push(direccion)

    });

    if(content.descripcion.length>150) this.descripcion= content.descripcion.substring(0,150) + '...';
    else this.descripcion =  content.descripcion
    this.links = content.links;
    this.direccion= content.direccion

    console.log(content.descripcion)
    this.info.open(marker)
  }




}



