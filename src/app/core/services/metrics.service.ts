import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class MetricsService {
  constructor(private api: ApiService) {}

  summary() {
    return this.api.get<any>('/metrics/users/summary');
  }

  monthly() {
    return this.api.get<any[]>('/metrics/users/monthly');
  }
}
