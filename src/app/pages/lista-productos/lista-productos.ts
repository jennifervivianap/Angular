import { Component, signal } from '@angular/core';
import { ProductoCard, Producto } from '../../components/producto-card/producto-card';

@Component({
  imports: [ProductoCard],
  selector: 'app-lista-productos',
  styleUrl: './lista-productos.css',
  templateUrl: './lista-productos.html',
})
export class ListaProductos {
  // Lista de productos disponibles
  productos = signal<Producto[]>([
    { id: '1', nombre: 'Laptop', categoria: 'Electrónica', emoji: '💻', precio: 1500, stock: 10 },
    { id: '2', nombre: 'Mouse', categoria: 'Accesorios', emoji: '🖱️', precio: 25, stock: 50 },
    { id: '3', nombre: 'Monitor 4K', categoria: 'Electrónica', emoji: '🖥️', precio: 800, stock: 8 },
    { id: '4', nombre: 'Teclado Mecánico', categoria: 'Accesorios', emoji: '⌨️', precio: 150, stock: 20 },
    { id: '5', nombre: 'Tablet Premium', categoria: 'Electrónica', emoji: '📱', precio: 2000, stock: 5 },
    { id: '6', nombre: 'Auriculares', categoria: 'Accesorios', emoji: '🎧', precio: 100, stock: 30 },
  ]);

  // Método para determinar si un producto debe ser destacado
  esDestacado(precio: number): boolean {
    return precio > 1000;
  }

  // Método para agregar producto al carrito
  agregarAlCarrito(producto: Producto): void {
    console.log(`Agregado al carrito: ${producto.nombre} - $${producto.precio}`);
  }
}
