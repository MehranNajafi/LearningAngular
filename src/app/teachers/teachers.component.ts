import { Component } from '@angular/core';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent {
  teachers;
  constructor(service: TeachersService) {
    this.teachers = service.getTeachers();
  }
}
