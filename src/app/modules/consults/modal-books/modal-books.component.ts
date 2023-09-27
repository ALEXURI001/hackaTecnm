import { Component } from '@angular/core';
import { ConsultsComponent } from '../consults.component';

@Component({
  selector: 'app-modal-books',
  templateUrl: './modal-books.component.html',
  styleUrls: ['./modal-books.component.css']
})
export class ModalBooksComponent {

  visibleBook!: boolean;


  showDialogBook() {
    this.visibleBook = true;
  }

}
