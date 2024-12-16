import { Component } from '@angular/core';

@Component({
  selector: 'app-entregable-2',
  templateUrl: './entregable-2.component.html',
  styleUrl: './entregable-2.component.scss'
})
export class Entregable2Component {
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

