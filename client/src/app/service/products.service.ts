import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:3200/api/products/';
  constructor(private httpService: HttpClient) {}

  getAllData() {
    return this.httpService.get(this.url);
  }
  getProductById(id: number): Observable<any> {
    return this.httpService.get<any>(`${this.url}${id}`);
  }
  getNewArrivals(): Observable<any[]> {
    return this.httpService
      .get<any[]>(this.url)
      .pipe(
        map((products) =>
          products
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .slice(0, 8)
        )
      );
  }
  getProductsByCategory(categoryId: number): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.url}category/${categoryId}`);
  }

  getDataByQuery(q: string) {
    return this.httpService.get(this.url + `?name=${q}`);
  }

  createProduct(product: any) {
    return this.httpService.post(this.url + 'create', product);
  }

  updateProduct(id: number, product: any) {
    return this.httpService.put(this.url + `update/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.httpService.delete(this.url + `delete/${id}`);
  }
  searchProducts(name: string): Observable<any[]> {
    return this.httpService.get<any[]>(`${this.url}?name=${name}`);
  }
}