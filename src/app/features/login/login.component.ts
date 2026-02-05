import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [CommonModule, CardModule, FormsModule, HttpClientModule, InputTextModule, ButtonModule],
  providers: [AuthService, ApiService],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    // this.auth.login(this.email, this.password).subscribe(user => {
    //   this.auth.setUser(user);
    //   this.router.navigate(['/dashboard']);
    // });
    this.router.navigate(['/dashboard']);
  }
}
