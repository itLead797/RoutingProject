import { Injectable } from '@angular/core';
import { LOGINDATA } from './login.data';
import { LoginModel } from './login.model';

@Injectable()
export class LoginService {
  loginData: LoginModel[];

  constructor() { }

  public getLoginData(): LoginModel[] {
    this.loginData = LOGINDATA;
    return this.loginData;
  }
}

