import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  CourseGoals = [
    { title : "ang 1", isActive : true },
    { title : "ang 2", isActive : false },
    { title : "ang 3", isActive : false }
  ];
  
}
