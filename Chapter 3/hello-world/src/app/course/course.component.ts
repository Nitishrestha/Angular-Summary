import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = 'List of courses';
  imageUrl = 'https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg';
  colSpan = 2;
  spaner = 5;
  isActive = false;
  constructor() { }

  onClick(){
    console.log('Save Button was clicked...');
  }

  ngOnInit() {
  }
}
