import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button'
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    CardComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
