import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

//register records

  valuedis:number = 1;

  display(n:string){
  this.valuedis=Number(n);
  }

getdisplay(){
  return this.valuedis;
}

//register copies

typeco: number = 0;

tipopublicacion: string = "tesis";

typecopies(){
  
if(this.tipopublicacion == "libro"){
  this.typeco = 1;
}
else if(this.tipopublicacion == "tesis"){
  this.typeco = 2;
}
else if(this.tipopublicacion == "publicacion periodica"){
  this.typeco = 3;
}

}

gettypecopies(){
  return this.typeco;
}

}
