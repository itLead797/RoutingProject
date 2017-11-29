import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['./']);
  }

  goLogin() {
    this.router.navigate(['./login']);
  }

  goSearch() {
    this.router.navigate(['./search']);
  }

  goApi() {
    this.router.navigate(['./api']);

  }
}
