import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3200/api/users';
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, {
      username,
      email,
      password,
      isActive: true,
    });
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('accessToken');
    }
    return null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token ? !this.helper.isTokenExpired(token) : false;
  }

  getUsernameFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.helper.decodeToken(token);
      return decodedToken.username;
    }
    return null;
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.helper.decodeToken(token);
      return decodedToken.role === 'admin';
    }
    return false;
  }

  logout(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
  }
}
