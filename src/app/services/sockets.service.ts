import { Injectable } from '@angular/core';
import io, { Socket } from 'socket.io-client';
import { environment } from 'src/enviroments/environment';

const wsServer = "http://10.54.1.137:80"

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  
  public socket!: Socket;
  public socketStatus: boolean = false;

  constructor(  ) { }

  connect(sala:any){

    this.socket = io( wsServer , 
      { 
        transports: ["websocket"],
        forceNew: true,
        query: {
          'Authorization': `${sala}`
        }
      }
    )

    this.checkStatus();

  }


  checkStatus() {
    this.socket!.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket!.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    });
  }

  disconnect() {
    this.socket!.disconnect();
  }


  handleEmit( event: string, payload: any ) {
    this.socket.emit( event, payload);
  }

}
