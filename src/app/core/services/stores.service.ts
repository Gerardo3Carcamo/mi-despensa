import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class StoresService {
  constructor(private api: ApiService) {}

  getStores() {
    return this.api.get<any[]>('/stores');
  }

  createStore(name: string) {
    return this.api.post('/stores', { name });
  }
}
