import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryCreate } from '../types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.category)
  }
  getCategory(_id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.category}/${_id}`)
  }
  deleteCategory(_id: number | string): Observable<any> {
    return this.http.delete(`${environment.category}/${_id}`)
  }
  //? Dữ liệu gửi đi {name: string}, nhận về {_id: number, name: string}
  createCategory(data: CategoryCreate): Observable<Category> {
    return this.http.post<Category>(`${environment.category}`, data)
  }
  updateCategory(_id: string, data: CategoryCreate): Observable<Category> {
    return this.http.patch<Category>(`${environment.category}/${_id}`, data)
  }

}
