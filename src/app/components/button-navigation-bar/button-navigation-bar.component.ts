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
    viewChat: boolean = false;
    


    ngOnInit() {
        this.items = [
            {
                label: 'Mapa interactivo',
                icon: '../../assets/imgsNav/mapa.png',
                routerLink: 'map'
            },
            {
                label: 'grupos',
                icon: '../../assets/imgsNav/fuego.png',
                routerLink: 'grupos'
            },
            {
                label: 'Lugares cercanos',
                icon: '../../assets/imgsNav/cercano.png',
                routerLink: 'lugaresCercanos'
            },
            {
                label: 'Mi tucan guía',
                icon: '../../assets/imgsNav/tucan.png',
                command: () => {
                    this.viewChat = true;
                }
            },

        ];
    }

}
