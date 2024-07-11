import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <div class="fondo"></div>
    <div class="contenido">
      <h2> "Expertos en estrategia y <br> Marketing Digital <br> +Modernas Plataformas con clientes <br> +15 PAISES"</h2>
      <div class="estrellas">
        <img src="/icon/start.svg" alt="">
        <img src="/icon/start.svg" alt="">
        <img src="/icon/start.svg" alt="">
        <img src="/icon/start.svg" alt="">
        <img src="/icon/start.svg" alt="">

      </div>
    </div>    
  </header>
  
  `,
  styleUrl: './presentacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentacionComponent { }
