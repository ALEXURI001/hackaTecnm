import { Component, OnDestroy, OnInit } from '@angular/core';
import { TucansitoGuiaService } from './tucansito-guia.service';
import { Observable } from 'rxjs';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { Chat, Grupo, respIA } from 'src/app/interfaces/ia.interface';

@Component({
  selector: 'app-tucansito-guia',
  templateUrl: './tucansito-guia.component.html',
  styleUrls: ['./tucansito-guia.component.css']
})
export class TucansitoGuiaComponent {


  mensaje=''
  mensajeVisible=''
  respuestaIa=''


constructor(
  private tucansitoService:TucansitoGuiaService,
  private ubicacionService:UbicacionService
  ){}




  async preguntar(){

    const body={ question: `${this.mensaje}+, en funcion a estas coordenadas`, location: `${this.ubicacionService.latitude}, ${this.ubicacionService.longitude}` }
this.respuestaIa = '';
    this.mensajeVisible = this.mensaje;
this.mensaje='';

    this.tucansitoService.askIA(body).subscribe(
      (resp:respIA)=>{

        this.respuestaIa = resp.content;

      }
    )

  }
    



}
