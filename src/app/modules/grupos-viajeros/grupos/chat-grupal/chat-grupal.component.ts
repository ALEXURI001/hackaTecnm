import { Component } from '@angular/core';
import { GruposService } from '../grupos.service';
import { Chat, Grupo } from '../../../../interfaces/ia.interface';
import { interval, take } from 'rxjs';


@Component({
  selector: 'app-chat-grupal',
  templateUrl: './chat-grupal.component.html',
  styleUrls: ['./chat-grupal.component.css']
})
export class ChatGrupalComponent {

constructor( private grupoService:GruposService){}

grupo!:Grupo 
chats!: Chat[];
mensaje: string = '';




ngOnInit(): void {
  const intervalo$ = interval(300);

  intervalo$.pipe(take(5)).subscribe(() => {
    this.consultarmsj(); // Llama a la función que realiza la petición
  });
}
  


 enviarmsj(){
  var today = new Date();
  var now = today.toLocaleString();

  const nvmsj: Chat ={
    contenido:this.mensaje,
    emisor:"deme",
    fecha: now
  }
  this.grupoService.nuevoMensaje(3,nvmsj).subscribe((resp) => {
    return resp;
  })
  this.mensaje = '';
  this.consultarmsj();
  console.log(this.chats);
  
}

 consultarmsj(){
   this.grupoService.showGroup(3).subscribe((resp) => {
    this.grupo = resp;
    this.chats = this.grupo.resp.chat;
   });
}

}
