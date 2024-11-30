import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = 'http://localhost:3200/api/categories/';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  createCategory(category: any): Observable<any> {
    return this.http.post(this.apiUrl + 'create', category);
  }
  
  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put(this.apiUrl + `update/${id}`, category);
  }
  
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + `delete/${id}`);
  }
}
