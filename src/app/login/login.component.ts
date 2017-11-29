import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { LoginModel } from '../services/login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() submitted = false;
  verified: boolean = false;
  loginData: LoginModel[];

  model = new LoginModel();

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): any {
    this.loginData = this.loginService.getLoginData();
  }

  onSubmit() {
    this.submitted = true;
    for (let i = 0; i < this.loginData.length; i++) {
      if (this.loginData[i].login === this.model.login && this.loginData[i].password === this.model.password) {
        this.verified = true;
      }
    }
  }
}
