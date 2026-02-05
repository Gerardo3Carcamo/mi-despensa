import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ListsService {
  constructor(private api: ApiService) {}

  getLists() {
    return this.api.get<any[]>('/lists');
  }

  createList(storeId: number, name: string) {
    return this.api.post('/lists', { storeId, name });
  }
}
