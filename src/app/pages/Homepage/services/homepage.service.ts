import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { post } from '../interfaces/homepage.interface';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private readonly http: HttpClient) {}

  public getPosts(): Observable<post[]> {
    return this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
