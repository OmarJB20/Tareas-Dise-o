import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
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


  images: any[] = [];  
  responsiveOptions: any[];

  constructor() {
    this.images = [
      {
        itemImageSrc: 'https://st.depositphotos.com/2045405/2015/i/600/depositphotos_20157387-stock-photo-summer-landscape-beauty-sunset-over.jpg',
        thumbnailImageSrc: 'https://st.depositphotos.com/2045405/2015/i/600/depositphotos_20157387-stock-photo-summer-landscape-beauty-sunset-over.jpg',
        alt: 'Imagen 2',
        title: 'Imagen 2',
      },
      {
        itemImageSrc: 'https://st3.depositphotos.com/15076092/17433/i/600/depositphotos_174336744-stock-photo-beautiful-red-sunset-and-sea.jpg',
        thumbnailImageSrc: 'https://st3.depositphotos.com/15076092/17433/i/600/depositphotos_174336744-stock-photo-beautiful-red-sunset-and-sea.jpg',
        alt: 'Imagen 3',
        title: 'Imagen 3',
      },
      {
        itemImageSrc: 'https://st.depositphotos.com/3095291/4120/i/600/depositphotos_41209319-stock-photo-beach-at-sunset.jpg',
        thumbnailImageSrc: 'https://st.depositphotos.com/3095291/4120/i/600/depositphotos_41209319-stock-photo-beach-at-sunset.jpg',
        alt: 'Imagen 4',
        title: 'Imagen 4',
      },
      {
        itemImageSrc: 'https://static4.depositphotos.com/1005366/368/i/600/depositphotos_3688121-stock-photo-sunset-over-water.jpg',
        thumbnailImageSrc: 'https://static4.depositphotos.com/1005366/368/i/600/depositphotos_3688121-stock-photo-sunset-over-water.jpg',
        alt: 'Imagen 5',
        title: 'Imagen 5',
      },
      {
        itemImageSrc: 'https://st3.depositphotos.com/15076092/17433/i/600/depositphotos_174336744-stock-photo-beautiful-red-sunset-and-sea.jpg',
        thumbnailImageSrc: 'https://st3.depositphotos.com/15076092/17433/i/600/depositphotos_174336744-stock-photo-beautiful-red-sunset-and-sea.jpg',
        alt: 'Imagen 3',
        title: 'Imagen 3',
      },
      {
        itemImageSrc: 'https://st.depositphotos.com/2045405/2015/i/600/depositphotos_20157387-stock-photo-summer-landscape-beauty-sunset-over.jpg',
        thumbnailImageSrc: 'https://st.depositphotos.com/2045405/2015/i/600/depositphotos_20157387-stock-photo-summer-landscape-beauty-sunset-over.jpg',
        alt: 'Imagen 2',
        title: 'Imagen 2',
      },
      {
        itemImageSrc: 'https://st.depositphotos.com/3095291/4120/i/600/depositphotos_41209319-stock-photo-beach-at-sunset.jpg',
        thumbnailImageSrc: 'https://st.depositphotos.com/3095291/4120/i/600/depositphotos_41209319-stock-photo-beach-at-sunset.jpg',
        alt: 'Imagen 4',
        title: 'Imagen 4',
      },
      

    ];

    this.responsiveOptions = [
      { breakpoint: '900px', numVisible: 3, numScroll: 3 },
      { breakpoint: '568px', numVisible: 2, numScroll: 2 },
      { breakpoint: '360px', numVisible: 1, numScroll: 1 },
    ];
  }

  ngOnInit(): void {}

  onImageChange(event: any): void {
    console.log('Imagen cambiada', event);
  }
}
