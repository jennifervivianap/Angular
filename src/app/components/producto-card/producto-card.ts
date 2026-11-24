import { Component, input, output } from '@angular/core';

export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  emoji: string;
  precio: number;
  stock: number;
}

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  // Recibir producto desde el componente padre
  producto = input.required<Producto>();
  
  // Input opcional para destacar la tarjeta (por defecto false)
  destacado = input<boolean>(false);

  // Emitir evento al componente padre
  agregar = output<Producto>();

  // Metodo que se ejecuta al hacer clic
  onAgregar(): void {
    if (this.producto().stock > 0) {
      this.agregar.emit(this.producto());
    }
  }
}
