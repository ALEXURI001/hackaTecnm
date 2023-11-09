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
export class MapaInteractivoComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap | undefined;

  pregunta: string = ""
  lugares: any[] = []
  status: boolean = false;
  
  center = { lat: 23.800136, lng: -100.590540 };
  visible = false;
  //Mostrar en la tarjeta al seleccionar un marcador
  titulo = ''
  descripcion = ''
  links = ''
  id = ''
  imagenes: any[] = []
  imagenes2: any[] = []
  horario = ''
  direccion = ''
  mensaje: string = '';
  component: boolean = false;
  zoom = 5.5;
  display?: google.maps.LatLngLiteral;

  constructor(
    private mapaService: MapaService
  ) {
  }


  ngOnInit(): void {

    this.getAllArtesanos()


  }


  arEvent() {
    this.visible = true;
  }

  getAllArtesanos() {

    this.mapaService.getLugares().subscribe(
      (resp: GetLugares) => {



        resp.resultado.forEach(element => {
          if (element.tipo == 'Playas y Cuerpos de agua') {
            element.tipo = 'https://img.icons8.com/clouds/30/beach.png'
          }
          else if (element.tipo == 'Restaurantes') {
            element.tipo = 'https://img.icons8.com/clouds/30/tableware.png'
          }
          else if (element.tipo == 'Museos') {
            element.tipo = 'https://img.icons8.com/?size=30&id=K3bPrXXzyXG7&format=png'
          }
          else if (element.tipo == 'Pueblos Mágicos') {
            element.tipo = 'https://img.icons8.com/?size=30&id=r9OuDWO1CSBv&format=png'
          }
          else if (element.tipo == 'Zonas Arqueológicas') {
            element.tipo = 'https://img.icons8.com/?size=30&id=zohpfczbXkPa&format=png'
          }
          else if (element.tipo == 'Tren Maya') {
            element.tipo = 'https://img.icons8.com/?size=30&id=n7wPd9MELQ3y&format=png'
          }
          else if (element.tipo == 'Hoteles') {
            element.tipo = 'https://img.icons8.com/?size=30&id=ZfSAxhIwFUbs&format=png'
          }
          else if (element.tipo == 'Plazas y Parques') {
            element.tipo = 'https://img.icons8.com/?size=30&id=g8998FYqoV23&format=png'
          }
          else if (element.tipo == 'Tours') {
            element.tipo = 'https://img.icons8.com/?size=30&id=mlvH3UMWDdAa&format=png'
          }


        });

        this.lugares = resp.resultado
        console.log(this.lugares);

      }
    )


    console.log(this.lugares);

  }


  openInfoWindow(marker: any, content: any) {

    console.log(content)

    this.id = content.id
    this.titulo = content.nombre
    this.horario = content.horario

    this.imagenes = content.imagenes

    this.imagenes.forEach(element => {

      let direccion = environment.urlBase + '/images/' + element
      this.imagenes2.push(direccion)

    });

    if (content.descripcion.length > 150) this.descripcion = content.descripcion.substring(0, 150) + '...';
    else this.descripcion = content.descripcion
    this.links = content.links;
    this.direccion = content.direccion

    this.info.open(marker)
  }

  async chambeagpt() {
    console.log(this.pregunta)
    this.component = true
    if (this.pregunta != "") {


      const body = {
        "messages": [{ "role": "system", "content": `You are a helpful tourist guide in ${this.titulo},mexico` },
        { "role": "user", "content": `"${this.pregunta}"` }],
        "model": "gpt-4"
      }
      console.log(body)
      this.status = false;
      this.mensaje = "";
      this.mapaService.getInfoLugarOPENIA(body).subscribe(
        resp => {
          console.log(resp)
          this.mensaje = resp;
          this.status = true;
          this.pregunta = "";
        }
      )


    }

  }


  showDialog() {
    this.visible = true;
}

}



