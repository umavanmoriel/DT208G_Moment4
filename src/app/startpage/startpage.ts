import { Component, OnInit } from '@angular/core';
import { Course } from '../model/courses';
import { CourseService } from '../services/courses';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-startpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './startpage.html',
  styleUrl: './startpage.css',
})
export class Startpage implements OnInit {

  courseList: Course[] = [];
  filteredCourses: Course[] = [];
  filterValue: string = "";
  sortBy: string = "coursename";
  sortDirection: string = "asc";

  constructor(private courseservice: CourseService) { }

  ngOnInit() {
    this.courseservice.getCourse().subscribe(data => {
      this.courseList = data;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    let filtered = this.courseList.filter((course) => 
      course.coursename.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      course.code.toLowerCase().includes(this.filterValue.toLowerCase())
    );
    
    // Sortering
    filtered.sort((a, b) => {
      let valueA, valueB;
      
      if (this.sortBy === "code") {
        valueA = a.code;
        valueB = b.code;
      } else if (this.sortBy === "coursename") {
        valueA = a.coursename;
        valueB = b.coursename;
      } else {
        valueA = a.progression;
        valueB = b.progression;
      }
      
      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    
    this.filteredCourses = filtered;
  }

  setSortBy(field: string): void {
    if (this.sortBy === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = field;
      this.sortDirection = 'asc';
    }
    this.applyFilter();
  }
}