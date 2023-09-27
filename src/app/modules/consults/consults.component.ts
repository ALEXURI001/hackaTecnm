import { Component } from '@angular/core';
import { ConsultsService } from './consults.service';
import { Filter1, Filter2, Product } from './consults.interface';
import { ModalBooksComponent } from './modal-books/modal-books.component';
@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent {
  /*FILTROS */
  tipos!: Filter1[];
  tipo!: Filter1;
  /* SERVICES */
  products!: Product[];
  selectedProduct!: Product;

  /*MODALES*/
  visibleBook!: boolean;
  visibleTesis!: boolean;
  visibleNews!: boolean;

  /*CAMPOS LABEL DE FILTROS */
  campo1: string = "Lugar";
  campo2: string = "Lenguaje";
  campo3: string = "Carrera";
  campo4: string = "";

  constructor(private consultsService: ConsultsService) { }

  ngOnInit() {
    this.tipos = [
      { name: 'Todo' },
      { name: 'Libros' },
      { name: 'Tesis' },
      { name: 'Publicaciones periódicas' }
    ];

 
    this.consultsService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  onRowSelect() {
    this.showDialogBook();
  }

  search() {
    if (this.tipo == this.tipos[1]) {
      this.showDialogBook();
    }
    else if (this.tipo == this.tipos[2]) {
      this.showDialogTesis();
    }
    else if (this.tipo == this.tipos[3]) {
      this.showDialogNews();
    }



  }


  filterDoc() {

    if (this.tipo == this.tipos[1]) {
     this.campo4 = "Nivel intelectual";
    }
    else if (this.tipo == this.tipos[2]) {
      this.campo4 = "Nivel de tesis";
  
    }
    else if (this.tipo == this.tipos[3]) {
      this.campo4 = "Editorial";
    }

  }



  /*MODALES */
  showDialogBook() {
    this.visibleBook = true;
  }

  showDialogTesis() {
    this.visibleTesis= true;
  }

  showDialogNews() {
    this.visibleNews= true;
  }



}
