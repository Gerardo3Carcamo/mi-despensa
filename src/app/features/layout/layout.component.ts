import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  private readonly router: Router = inject(Router);

  go = (path: string): Promise<boolean> => this.router.navigate([path]);
  logout = (): Promise<boolean> => this.router.navigate(['login']);

}
