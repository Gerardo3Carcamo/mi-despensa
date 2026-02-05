import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private api: ApiService) {}

  login(email: string, password: string) {
    return this.api.post<any>('/users/login', { email, password });
  }

  register(name: string, email: string, password: string) {
    return this.api.post('/users/register', { name, email, password });
  }

  setUser(user: any) {
    localStorage.setItem('userId', user.id);
    localStorage.setItem('userName', user.name);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return !!localStorage.getItem('userId');
  }
}
