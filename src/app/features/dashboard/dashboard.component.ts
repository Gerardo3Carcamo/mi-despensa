import { Component } from '@angular/core';
import { CardModule } from "primeng/card";
import { MetricsService } from '../../core/services/metrics.service';
import { ApiService } from '../../core/services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, HttpClientModule],
  providers: [MetricsService, ApiService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  cards: any[] = [];
  constructor(private metrics: MetricsService) {
    this.metrics.summary().subscribe(r => {
      this.cards = [
        { title: 'Total', value: r.real },
        { title: 'Estimado', value: r.estimated },
        { title: 'Diferencia', value: r.difference }
      ];
    });
  }

}
