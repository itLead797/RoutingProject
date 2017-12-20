import { TestBed, inject } from '@angular/core/testing';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    loginService = new LoginService();

    TestBed.configureTestingModule({
      providers: [LoginService]
    });
  });

  it('service should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('service should retreive login data', () => {
    const data: LoginModel[] = loginService.getLoginData();
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].login).toBe('robert');
    expect(data[0].password).toBe('1234');
  });
});
