import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  courses = [1, 2];
  fullCourses : any;
  loadCourse() {
    this.fullCourses = [
      { Id: 0, Name: '1' },
      { Id: 1, Name: '2' },
      { Id: 2, Name: '3' },
    ];
  }
  viewMode = 'map';
  trackCourse(index: number, course: any) {
    return course ? course.Id : undefined;
  }
}
