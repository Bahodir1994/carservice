import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Сохранение токена в локальном хранилище
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);

        // Перенаправление на страницу Dashboard
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Ошибка аутентификации:', error);
        this.error = 'Ошибка аутентификации. Проверьте свои учетные данные и повторите попытку.';
      }
    );
  }
}
