import { NgModule, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses = [
    { id:1, name:'course1' },
    { id:2, name:'course2' },
    { id:3, name:'course3' }
  ];

  constructor() { }

  ngOnInit() {

  }

}
