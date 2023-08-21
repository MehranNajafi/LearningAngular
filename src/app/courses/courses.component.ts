import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
   courses;
   isActive = false;
   email="m@m.ir";
   constructor(coursesService : CoursesService) {
    this.courses = coursesService.getCourses();
   }
   onKeyUp(){
    alert(this.email);
   }
   text = 'Creating a component using the Angular CLIlink · From a terminal window, navigate to the directory containing your application. · Run the ng generate component';

}
