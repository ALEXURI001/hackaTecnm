import { Component } from '@angular/core';
import Swal from 'sweetalert2'

interface City {
  name: string;
}

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {

  cities!: City[];

  selectedCity!: City;

  ngOnInit() {
      this.cities = [
          { name: 'Préstamos'},
          { name: 'Devoluciones'},
          { name: 'Renovaciones' }
      ];
  }

tipo: string = "";

userControl(){
  console.log(this.tipo);
}


}
