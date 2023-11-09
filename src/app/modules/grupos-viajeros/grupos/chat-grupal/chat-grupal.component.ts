import { Component, OnDestroy } from '@angular/core';
import { GruposService } from '../grupos.service';
import { Chat, Grupo } from '../../../../interfaces/ia.interface';
import { interval, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GruposComponent } from '../grupos.component';
import { SocketsService } from 'src/app/services/sockets.service';


@Component({
  selector: 'app-chat-grupal',
  templateUrl: './chat-grupal.component.html',
  styleUrls: ['./chat-grupal.component.css']
})

export class ChatGrupalComponent implements OnDestroy{

constructor( 
  private grupoService:GruposService, 
  private route: ActivatedRoute,
  private socketService : SocketsService
  ){}

grupo!:Grupo 
chats!: Chat[];
mensaje: string = '';
sala : any;
miName: any = ""
idSala : number = 0;
viewChat: boolean = true;


 
ngOnDestroy() {
  this.socketService.handleEmit("leave",this.idSala)
}

ngOnInit(): void {

  this.miName= localStorage.getItem('usuario')
  this.idSala = Number(this.route.snapshot.paramMap.get('id'));
  this.socketService.connect(`${this.idSala}`);
  this.consultarmsj(); 
  //this.idSala = localStorage.getItem(parseInt('idSala'));  
  this.socketService.socket.on("NuevoMensaje", (payload)=>{
      this.chats.push(payload)
  })

}
/*
chatSala(){
  this.idSala = Number(this.sala = localStorage.getItem('idSala'));
  console.log("hola"+ this.idSala);
}
  */


 enviarmsj(){
  var today = new Date();
  var now = today.toLocaleString();

  const nvmsj: Chat ={
    contenido:this.mensaje,
    emisor:this.miName!,
    fecha: now
  }



  this.grupoService.nuevoMensaje(this.idSala,nvmsj).subscribe((resp) => {
    return resp;
  })
  this.socketService.handleEmit("MandarMensaje", {sala: this.idSala, nuevo:nvmsj})
  this.mensaje = '';
  
}

 consultarmsj(){
   this.grupoService.showGroup(this.idSala).subscribe((resp) => {
    this.grupo = resp;
    this.chats = this.grupo.resp.chat;
   });
}




}
