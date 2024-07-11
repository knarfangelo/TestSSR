import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { IContenido } from './BDContenido/IContenido';
import { contenidoJSON } from './BDContenido/contenidoJSON';
register();
@Component({
  selector: 'app-contenido',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    NgOptimizedImage,
    CommonModule,
  ],
  template: `
  <header>
        <h1>Contenido digital</h1>
        <main>

          <swiper-container init=false class="swiper-contenido">
            @for (item of items; track $index) {
                <swiper-slide>
                  <div class="slide-style">
                    <div class="articulo">
                    <img [ngSrc]="item.img" [width]=250 [height]=250 [alt]="item.titulo">
                    <ul class="etiquetas">
                    @for (etiqueta of item.etiquetas; track $index) {
                      <li class="etiqueta">{{etiqueta}}</li>
                    }</ul>
                  </div>
                    <p class="titulo">{{item.titulo}}</p>
                    <ul class="informacion-container">
                      <li class="informacion choose"><a href="https://chooseagencia.com/" target="_blank"> 
                      <img class="icon" src="/icon/persona.svg" alt="">  
                      choose</a></li>
                      <li class="informacion"><a href="">
                      <img class="icon" src="/icon/fecha.svg" alt="">  
                      {{item.fecha}}</a></li>
                      <li class="informacion"><a href="">
                      <img class="icon" src="/icon/comentario.svg" alt="">  
                      {{item.comentarios}}</a></li>
                    </ul>
                  </div>
                </swiper-slide>
            }
          </swiper-container>
        </main>
  </header>
  `,
  styleUrl: './contenido.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContenidoComponent {

  swiperElements = signal<SwiperContainer | null>(null);
  items:IContenido[] = contenidoJSON;
    ngOnInit(): void {
      const swiperElemConstructor = document.querySelector('.swiper-contenido');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        loop:true,
        autoplay:true,
        slidesPerView: 'auto',
        speed: 2000,
        breakpoints: {
          0:{
            slidesPerView:1,
          },
          640: {
            slidesPerView:2,
          },
          1024: {
            slidesPerView:3,
          },
        },
        spaceBetween: 25,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();
    }

 }
