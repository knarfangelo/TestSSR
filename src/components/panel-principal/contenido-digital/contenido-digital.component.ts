import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-contenido-digital',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  template: ` 
  <header>
    <article class="panel-1">
      <h1>WEB Y PROGRAMACION</h1>
      <a href="" class="articulo-1">
        <img ngSrc="/panel-principal/desarrollowebinnovacion.png" fill="" alt="" priority="">
        <div class="fondo"></div>
        <div class="contenido">
        <ul>
          <li>Contenido digital</li>
          <li>Web y programación</li>
        </ul>
        <p>Tendencias de Diseño Web 2024: Una mirada al futuro</p>
        <p>junio 4, 2024</p>
        </div>
      </a>
    </article>

    <article class="panel-2">
      <h1>LEY DEL OLVIDO</h1>
      <a href="" class="articulo-2">
      <img ngSrc="/panel-principal/ORIGENDELALEYDELOLVIDO.png" fill=""  alt="">
      <div class="fondo"></div>
      <div class="contenido">
        <ul>
          <li>Eliminación de contenido</li>
          <li>Novedades</li>
        </ul>
        <p>El origen de la ley del olvido</p>
        <p>junio 6, 2024</p>
        </div>
      </a>
      <a href="" class="articulo-3">
      <img ngSrc="/panel-principal/LALEYDELOLVIDOPROTEGETUREPUTACION.png" fill=""  alt="">
      <div class="fondo"></div>
      <div class="contenido">
        <ul>
          <li>Eliminación de contenido</li>
        </ul>
        <p>La ley del olvido: Protege tu reputación con Choose</p>
        <p>junio 6, 2024</p>
        </div>
      </a>
    </article>
  </header>    
  `,
  styleUrl: './contenido-digital.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContenidoDigitalComponent {

  swiperElements = signal<SwiperContainer | null>(null);


    

 }
