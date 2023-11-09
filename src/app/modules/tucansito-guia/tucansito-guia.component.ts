import { Component, OnDestroy, OnInit } from '@angular/core';
import { TucansitoGuiaService } from './tucansito-guia.service';
import { Observable } from 'rxjs';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { Chat, Grupo, respIA } from 'src/app/interfaces/ia.interface';

interface chat{
  role: string;
  content:string;
}

let mybody : any

let band: boolean = false;

@Component({
  selector: 'app-tucansito-guia',
  templateUrl: './tucansito-guia.component.html',
  styleUrls: ['./tucansito-guia.component.css']
})



export class TucansitoGuiaComponent {


  mensaje=''
  mensajeVisible=''
  respuestaIa=''
  pregunta : string =""
  chats:chat[]= []
  spiner:boolean = false


constructor(
  private tucansitoService:TucansitoGuiaService,
  private ubicacionService:UbicacionService
  ){}


    ngOnInit(): void {
    
      console.log(this.ubicacionService.latitude,this.ubicacionService.longitude)
      console.log("HOLA")
     mybody = {"messages":[],
       "model": "gpt-4"
      }

      console.log(mybody)

        }

        
      
    


  async preguntar(){
    this.spiner = true;

    if(band == false){
      mybody.messages.push({ "role": "system", "content": `You are a helpful tourist guide in these coordinates ${this.ubicacionService.latitude},${this.ubicacionService.longitude}` })
      band = true;
      console.log(mybody)
    }
    

    console.log(this.pregunta)
        
      if(this.pregunta != ""){
      
        mybody.messages.push({"role": "user", "content": `"${this.pregunta}"` })
        this.chats = mybody.messages;
        
      console.log(mybody)
      this.mensaje = "";
      this.tucansitoService.conversaTucan(mybody).subscribe(
        resp=>{
          this.pregunta = "";
          this.spiner = false;
          console.log(resp)
          this.mensaje = resp;
          mybody.messages.push(resp)
          this.chats = mybody.messages;
          console.log(this.chats);
          
        }
      )
      
      
      }
       

//     const body={ question: `${this.mensaje}+, en funcion a estas coordenadas`, location: `${this.ubicacionService.latitude}, ${this.ubicacionService.longitude}` }
// this.respuestaIa = '';
//     this.mensajeVisible = this.mensaje;
// this.mensaje='';

//     this.tucansitoService.askIA(body).subscribe(
//       (resp:respIA)=>{

//         this.respuestaIa = resp.content;

//       }
//     )

  }
    



}
