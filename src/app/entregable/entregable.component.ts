import { Component } from '@angular/core';

@Component({
  selector: 'app-entregable',
  templateUrl: './entregable.component.html',
  styleUrl: './entregable.component.scss'
})
export class EntregableComponent {
  items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Matrices',
      icon: 'pi pi-table',
      routerLink: '/entregable'
    },
    {
      label: 'Cuadros',
      icon: 'pi pi-stop',
      routerLink: '/entregable-1'
    },
    {
      label: 'Cards',
      icon: 'pi pi-th-large',
      routerLink: '/entregable-2'
    },
    {
      label: 'Iconos',
      icon: 'pi pi-face-smile',
      routerLink: '/iconos'
    },
    {
      label: 'Carrusel',
      icon: 'pi pi-images',
      routerLink: '/carusel'
    },
    {
      label: 'Galeria',
      icon: 'pi pi-image',
      routerLink: '/galeria'
    }
  ];

}
