import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3200/api/cart';

  constructor(private http: HttpClient) {}

  addToCart(productId: number, quantity: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(
      `${this.apiUrl}/add`,
      { productId, quantity },
      { headers }
    );
  }

  getCart(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);    
    return this.http.get<any>(this.apiUrl, { headers });
  }

  removeFromCart(productId: number, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${this.apiUrl}/remove`, {
      headers,
      body: { productId },
    });
  }
}
