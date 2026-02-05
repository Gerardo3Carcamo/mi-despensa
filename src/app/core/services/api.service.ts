import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';

export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api';

  private get headers() {
    const userId = localStorage.getItem('userId');
    return {
      headers: new HttpHeaders({
        'X-User-Id': userId ?? ''
      })
    };
  }

  get<T>(url: string) {
    return this.http.get<T>(`${this.baseUrl}${url}`, this.headers);
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.baseUrl}${url}`, body, this.headers);
  }
}
