import { Component } from '@angular/core';
import { GruposService } from './grupos.service';
import { Datos } from 'src/app/interfaces/grupos.interface';
import { Usuario } from 'src/app/interfaces/modalGroup';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {
  visible: boolean = false;

  grupos: Datos[] = [];
  
  //DATOS GRUPO
  nombreGrupo: string = "";
  destino: string = "";
  usuarios: Usuario[] = [];

  ngOnInit() { 
    this.showAllGroups();
  }
  constructor(private gruposService: GruposService) { }

  showAllGroups(){
    this.gruposService.showGroups().subscribe((respon) =>{

      this.grupos = respon.resp;
      console.log(this.grupos);
    })
  }


  showgroup(grupos: number) {

    this.gruposService.showGroup(grupos).subscribe((resp) =>{
      console.log(resp.resp.nombre);
      this.nombreGrupo = resp.resp.nombre;
      this.destino = resp.resp.destino;
      this.usuarios = resp.resp.usuarios;
      
    })

      console.log(grupos);
      this.visible = true;
  }
}
