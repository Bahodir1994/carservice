import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/realms/carappservicev1/protocol/openid-connect/token';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = `grant_type=password&client_id=carapp-clientv1&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa('carapp-clientv1:'));
    return this.http.post(this.authUrl, body, { headers });
  }

  isLoggedIn(): boolean {
    // Проверяем наличие токена в локальном хранилище
    return !!localStorage.getItem('access_token');
  }

  logout(): void {
    // Удаляем токены из локального хранилища при выходе из системы
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
