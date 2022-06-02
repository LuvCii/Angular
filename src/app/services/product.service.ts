import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //? Khai báo http để có đối tượng httpClient tương tác với phương thức api
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products)
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${id}`)
  }

  deleteProduct(id: number | string): Observable<any> {
    return this.http.delete(`${environment.products}/${id}`)
  }

  createProduct(data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data)
  }
}
