import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserCreate } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.user)
  }
  // getCategory(_id: string): Observable<User> {
  //   return this.http.get<User>(`${environment.category}/${_id}`)
  // }
  deleteUser(_id: number | string): Observable<any> {
    return this.http.delete(`${environment.user}/${_id}`)
  }
  updateUser(_id: string, data: UserCreate): Observable<User> {
    return this.http.patch<User>(`${environment.user}/${_id}`, data)
  }
}
