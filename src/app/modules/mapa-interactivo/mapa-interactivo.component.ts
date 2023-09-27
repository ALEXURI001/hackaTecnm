import { Component, OnInit, ViewChild } from '@angular/core';
import { MapaService } from './mapa.service';
import { GetLugares } from 'src/app/interfaces/lugares.interface';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-mapa-interactivo',
  templateUrl: './mapa-interactivo.component.html',
  styleUrls: ['./mapa-interactivo.component.css']
})
export class MapaInteractivoComponent implements OnInit{

  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  
  
  lugares: any[] =[]

  infoContent = '';
  center = {lat: 21.0112286, lng: -89.6257671};
  zoom = 6;
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
    console.log(marker);
    this.infoContent =  content
    this.info.open(marker)
  }




}



