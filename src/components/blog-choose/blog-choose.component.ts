import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { PanelPrincipalComponent } from "../panel-principal/panel-principal.component";
import { FooterComponent } from "../panel-principal/footer/footer.component";
import { NavegacionResponsiveComponent } from "../navegacion-responsive/navegacion-responsive.component";

@Component({
  selector: 'app-blog-choose',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    PanelPrincipalComponent,
    FooterComponent,
    NavegacionResponsiveComponent
],
  template: `
        <app-navegacion></app-navegacion>
        <app-navegacion-responsive></app-navegacion-responsive>
    <app-panel-principal></app-panel-principal>
    <app-footer></app-footer>
  `,
  styleUrl: './blog-choose.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogChooseComponent { 

}
