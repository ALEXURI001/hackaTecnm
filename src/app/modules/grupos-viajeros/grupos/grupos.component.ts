import { Component } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {
  visible: boolean = false;

  showgroup() {
      this.visible = true;
  }
}
