import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  host = `${environment.host}/category`;

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<any> {
    return this.http.get(this.host).pipe(retry(2));
  }

  fetchById(id: number): Observable<any> {
    return this.http.get(`${this.host}/${id}`).pipe(retry(2));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.host}/${id}`).pipe(retry(2));
  }

  add(object: any): Observable<any> {
    return this.http.post(this.host, object).pipe(retry(2));
  }

  update(id: number, object: any): Observable<any> {
    return this.http.put(`${this.host}/${id}`, object).pipe(retry(2));
  }
}
