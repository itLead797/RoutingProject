import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { LoginService } from '../services/login/login.service';
import { LoginModel } from '../services/login/login.model';

class loginServiceMock {
  data: LoginModel[];
  public getLoginData(): LoginModel[] {
       this.data = [{'login': 'william', 'password': '5678'}];
    return this.data;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
      ],
      providers: [
       {provide: LoginService, useClass: loginServiceMock}
       ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate login/password', () => {
    component.ngOnInit();
    component.model.login = 'william';
    component.model.password = '5678';
    component.onSubmit();
    expect(component.submitted).toBe(true, 'expect submitted');
    expect(component.verified).toBe(true, 'expect verified');
  });

  it('should faile invalid login/password', () => {
    component.ngOnInit();
    component.model.login = 'robert';
    component.model.password = '1234';
    component.onSubmit();
    expect(component.submitted).toBe(true, 'expect submitted');
    expect(component.verified).toBe(false, 'expect not verified');
  });


  it('should create a blank login page', async(() => {
    spyOn(component, 'ngOnInit');
    const instance = fixture.elementRef.nativeElement;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.ngOnInit).toHaveBeenCalled();
    const login = instance.querySelector('#loginId').value;
    const password = instance.querySelector('#password').value;
    expect(login).toBe('', 'expect blank field');
    expect(password).toBe('', 'expect blank field');
    expect(component.submitted).toBe(false, 'expect not submitted');
    expect(component.verified).toBe(false, 'expect not verified');
  }));

  it('should accept entered data', async(() => {
    const instance = fixture.elementRef.nativeElement;
    let input = fixture.debugElement.query(By.css('#loginId')).nativeElement;
    input.value = 'william';
    input = fixture.debugElement.query(By.css('#password')).nativeElement;
    input.value = '5678';
    fixture.detectChanges();
    const login = instance.querySelector('#loginId').value;
    const password = instance.querySelector('#password').value;
    expect(login).toBe('william', 'expect william');
    expect(password).toBe('5678', 'expect 5678');
  }));

  it('should verify entered data', async(() => {
    component.ngOnInit();
    component.model.login = 'william';
    component.model.password = '5678';
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('#btnSubmit');
    button.click();
    fixture.detectChanges();
    expect(component.submitted).toBe(true, 'expect submitted');
    expect(component.verified).toBe(true, 'expect verified');
  }));

});
