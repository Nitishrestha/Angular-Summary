import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
  <h2>{{ title }}</h2>
  <h3>{{ "Heading :  "  +getHeading()}}</h3>
  <ul>
    <li *ngFor='let course of courses'>
    {{course}}
    </li>
  </ul>
  `
})
export class CoursesComponent {
  title = 'List of courses';
  heading = 'This is a heading';
  courses;


  constructor(service: CoursesService) {
   //const service = new CoursesService();
   this.courses = service.getCourses();
  }


  getHeading() {
    return this.heading;
  }

}
