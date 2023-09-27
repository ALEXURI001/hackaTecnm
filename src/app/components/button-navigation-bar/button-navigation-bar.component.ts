import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-button-navigation-bar',
  templateUrl: './button-navigation-bar.component.html',
  styleUrls: ['./button-navigation-bar.component.css']
})
export class ButtonNavigationBarComponent {

  items!: MenuItem[];

    position: string = 'bottom';



    ngOnInit() {
        this.items = [
            {
                label: 'grupos',
                icon: '../../assets/imgsNav/fuego.png'
            },
            {
                label: 'Mapa interactivo',
                icon: '../../assets/imgsNav/mapa.png'
            },
            {
                label: 'Lugares cercanos',
                icon: '../../assets/imgsNav/cercano.png'
            },
            {
                label: 'Mi tucan guía',
                icon: '../../assets/imgsNav/tucan.png'
            },

        ];
    }

}
