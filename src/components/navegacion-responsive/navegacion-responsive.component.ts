import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <div class="botones-imagenes">
      <button>
        <img class="navchoose" src="/icon/nav-responsive.svg" alt="navChoose">
      </button>
        <img class="logochoose" src="/navegacion/novedades/logo.png" alt="logoChoose">
    </div>
    <nav>
        <ul>
          <li>WEB Y PROGRAMACION</li>
          <li>LEY DEL OLVIDO</li>
          <li>CONTENIDO DIGITAL</li>
          <li>SOCIAL LISTENING</li>
          <li>AUTOR</li>
        </ul>
    </nav>
  </header>

  `,
  styleUrl: './navegacion-responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionResponsiveComponent { }
