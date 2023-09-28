import { Component } from '@angular/core';
import { GruposService } from './grupos.service';
import { Datos } from 'src/app/interfaces/grupos.interface';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {
  visible: boolean = false;

  grupos: Datos[] = [];
  

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


  showgroup() {
      this.visible = true;
  }
}
