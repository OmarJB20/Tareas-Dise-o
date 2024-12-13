import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'] // Asegúrate de que la propiedad sea 'styleUrls' en lugar de 'styleUrl'
})
export class CaruselComponent implements OnInit {

  products: any[] = [];
  responsiveOptions: any[];

  constructor() {
    // Opciones para dispositivos responsivos
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    // Simula los productos con su respectivo inventario para la prueba
    this.products = [
      { image: 'product1.jpg', name: 'Product 1', price: 100, inventoryStatus: 'INSTOCK' },
      { image: 'product2.jpg', name: 'Product 2', price: 150, inventoryStatus: 'LOWSTOCK' },
      { image: 'product3.jpg', name: 'Product 3', price: 200, inventoryStatus: 'OUTOFSTOCK' },
      // Añadir más productos según lo necesario
    ];
  }

  // Método para determinar la severidad del estado del inventario
  getSeverity(status: string): 'success' | 'warning' | 'danger' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;  // Regresa undefined si el estado no es reconocido
    }
  }
}

