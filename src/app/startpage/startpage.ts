import { Component } from '@angular/core';
import { Course } from '../model/courses';
import { CourseService } from  '../services/courses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-startpage',
  imports: [CommonModule],
  templateUrl: './startpage.html',
  styleUrl: './startpage.css',
})
export class Startpage {

  courseList : Course[] = [];

  constructor(private courseservice : CourseService ){}

  ngOnInit() {
    this.courseservice.getCourse().subscribe(data => {
      this.courseList = data;
    })
  }
}
