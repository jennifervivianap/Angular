import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './components/saludo/saludo';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Producto, ProductoCard } from './components/producto-card/producto-card';

@Component({
  imports: [RouterOutlet, Header, ProductoCard, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TechStore');
  protected readonly autor = 'Angel Chuncho';

  productos: Producto[] = [
    {
      id: '1',
      nombre: 'Laptop',
      categoria: 'Computadoras',
      emoji: '💻',
      precio: 850,
      stock: 10
    },
    {
      id: '2',
      nombre: 'Mouse',
      categoria: 'Periféricos',
      emoji: '🖱️',
      precio: 25,
      stock: 15
    },
    {
      id: '3',
      nombre: 'Teclado',
      categoria: 'Periféricos',
      emoji: '⌨️',
      precio: 45,
      stock: 8
    },
    {
      id: '4',
      nombre: 'Monitor',
      categoria: 'Pantallas',
      emoji: '🖥️',
      precio: 220,
      stock: 5
    },
    {
      id: '5',
      nombre: 'Audífonos',
      categoria: 'Audio',
      emoji: '🎧',
      precio: 65,
      stock: 12
    },
    {
      id: '6',
      nombre: 'Cámara Web',
      categoria: 'Accesorios',
      emoji: '📷',
      precio: 75,
      stock: 0
    },
    {
      id: '7',
      nombre: 'Laptop Gamer',
      categoria: 'Computadoras',
      emoji: '💻',
      precio: 1200,
      stock: 3
    }
  ];

  agregarAlCarrito(producto: Producto): void {
    console.log("agregado")
  }

  esDestacado(precio: number): boolean {
    return precio > 1000;
  }
}
