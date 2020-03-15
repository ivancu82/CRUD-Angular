import { Component } from '@angular/core';
import { Productos } from './models/productos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productosArray: Productos[] = [
    ];
    selectedProductos: Productos = new Productos();
    openForEdit(productos: Productos) {
      this.selectedProductos = productos;
    }
    addOrEdit() {
      if (this.selectedProductos.id === 0) {
        this.selectedProductos.id = this.productosArray.length + 1;
        this.productosArray.push(this.selectedProductos);
      }
      this.selectedProductos = new Productos();
    }
    delete() {
      if (confirm('Estas seguro de querer eliminarlo?')) {
        this.productosArray = this.productosArray.filter(x => x !== this.selectedProductos);
        this.selectedProductos = new Productos();
      }
    }
}
