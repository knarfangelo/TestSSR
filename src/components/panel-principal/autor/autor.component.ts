import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
      <h1>AUTOR</h1>
      <img class="charles" src="/panel-principal/CHARLES.png" alt="">
      <p><a href="https://chooseagencia.com/">CHARLES</a></p>
      <p>Charles viene del futuro con estrategia y tecnología avanzada para nuestra época.</p>
      <ul>
        <li><a href="https://www.facebook.com/ChooseAgenciaCreativa" target="_blank"><img src="/icon/facebook.svg" alt=""></a></li>
        <li><a href="https://www.linkedin.com/in/choose-agencia-creativa/" target="_blank"><img src="/icon/linkedin.svg" alt=""></a></li>
        <li><a href="https://www.instagram.com/chooseagencia/" target="_blank"><img src="/icon/instagram.svg" alt=""></a></li>
        <li><a href="https://www.youtube.com/@chooseagencia" target="_blank"><img src="/icon/youtube.svg" alt=""></a></li>
      </ul>
  </header>


  `,
  styleUrl: './autor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutorComponent { 



}
