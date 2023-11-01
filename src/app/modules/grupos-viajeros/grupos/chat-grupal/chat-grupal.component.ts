import { Component } from '@angular/core';
import { GruposService } from '../grupos.service';
import { Chat, Grupo } from '../../../../interfaces/ia.interface';
import { interval, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GruposComponent } from '../grupos.component';


@Component({
  selector: 'app-chat-grupal',
  templateUrl: './chat-grupal.component.html',
  styleUrls: ['./chat-grupal.component.css']
})

export class ChatGrupalComponent {

constructor( 
  private grupoService:GruposService, 
  private route: ActivatedRoute,
  ){}

grupo!:Grupo 
chats!: Chat[];
mensaje: string = '';
sala : any;
miName: any = ""
idSala : number = 0;
viewChat: boolean = true;



ngOnInit(): void {

  this.miName= localStorage.getItem('usuario')
  const intervalo$ = interval(300);

  intervalo$.pipe(take(5)).subscribe(() => {
    this.consultarmsj(); 
  });
  //this.idSala = localStorage.getItem(parseInt('idSala'));  
  this.idSala = Number(this.route.snapshot.paramMap.get('id'));

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
  this.mensaje = '';
  this.consultarmsj();
  console.log(this.chats);
  
}

 consultarmsj(){
   this.grupoService.showGroup(this.idSala).subscribe((resp) => {
    this.grupo = resp;
    this.chats = this.grupo.resp.chat;
   });
}




}
