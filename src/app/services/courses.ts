import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CourseService {

  private url:string = 'https://webbutveckling.miun.se/files/ramschema.json';
  
  constructor(private http: HttpClient) {}

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
