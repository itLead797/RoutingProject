import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate() {
    window.open('https://www.google.com', '_blank');

    // window.location.href = 'https://www.google.com';
}

goLogin() {
  this.router.navigate(['./login']);
}
}
