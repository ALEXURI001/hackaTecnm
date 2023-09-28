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

miName: any = ""



ngOnInit(): void {

  this.miName= localStorage.getItem('usuario')
  const intervalo$ = interval(300);

  intervalo$.pipe(take(5)).subscribe(() => {
    this.consultarmsj(); 
  });
}
  


 enviarmsj(){
  var today = new Date();
  var now = today.toLocaleString();

  const nvmsj: Chat ={
    contenido:this.mensaje,
    emisor:this.miName!,
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
