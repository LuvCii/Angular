import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductCreate } from '../types/Product';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private http: HttpClient) { }
  //? Kiểu dữ liệu Observable sẽ giúp lắng nghe API trả về kết quả
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products)
  }

  getProduct(_id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${_id}`)
  }

  deleteProduct(_id: number | string): Observable<any> {
    return this.http.delete(`${environment.products}/${_id}`)
  }

  //? Dữ liệu gửi đi {name: string}, nhận về {_id: number, name: string}
  createProduct(data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data)
  }

  updateProduct(_id: string, data: ProductCreate): Observable<Product> {
    return this.http.patch<Product>(`${environment.products}/${_id}`, data)
  }
}
