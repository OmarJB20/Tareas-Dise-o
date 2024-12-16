import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntregableComponent } from './entregable/entregable.component';
import { Entregable1Component } from './entregable-1/entregable-1.component';
import { Entregable2Component } from './entregable-2/entregable-2.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { BotonesComponent } from './botones/botones.component';
import { ButtonModule } from 'primeng/button';
import { CaruselComponent } from './carusel/carusel.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    EntregableComponent,
    Entregable1Component,
    Entregable2Component,
    ListaTrabajosComponent,
    BotonesComponent,
    CaruselComponent,
    GaleriaComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    GalleriaModule,
    MenubarModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
