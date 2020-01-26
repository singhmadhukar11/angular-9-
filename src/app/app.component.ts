import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crudops';
  constructor(private router : Router){}

  public name = "crudops"

  ngOnInit(){
    this.router.navigate([''])
  }
}
