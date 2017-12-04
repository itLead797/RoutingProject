import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ApiComponent } from './api.component';
import { RequestModel } from './request.model';

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiComponent],
      imports: [HttpModule, FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display api buttons', () => {
    const instance = fixture.elementRef.nativeElement;
    let button = instance.querySelector('#btnGet').textContent;
    expect(button).toBe('GET', 'button exists');
    button = instance.querySelector('#btnPost').textContent;
    expect(button).toBe('POST', 'button exists');
    button = instance.querySelector('#btnPut').textContent;
    expect(button).toBe('PUT', 'button exists');
    button = instance.querySelector('#btnDelete').textContent;
    expect(button).toBe('DELETE', 'button exists');
  });

  it('should accept a URL', () => {
    const instance = fixture.elementRef.nativeElement;
    let input = fixture.debugElement.query(By.css('#urlField')).nativeElement;
    input.value = 'http://google.com';
    fixture.detectChanges();
    const urlField = instance.querySelector('#urlField').value;
    expect(urlField).toBe('http://google.com', 'expect url value');
  });


  it('should perform a GET', async(() => {
    spyOn(component, 'onGet');
    let button = fixture.debugElement.query(By.css('#btnGet')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.onGet).toHaveBeenCalled();
    // console.log(component.response);
  }));

  it('should perform a POST', async(() => {
    spyOn(component, 'onPost');
    let button = fixture.debugElement.query(By.css('#btnPost')).nativeElement;
    // let input = fixture.debugElement.query(By.css('#requestBody')).nativeElement;
    // input.value = 'foo';
    // fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    expect(component.onPost).toHaveBeenCalled();
  }));

  it('should perform a PUT', async(() => {
    spyOn(component, 'onPut');
    let button = fixture.debugElement.query(By.css('#btnPut')).nativeElement;
    // let input = fixture.debugElement.query(By.css('#requestBody')).nativeElement;
    // input.value = 'foo';
    // fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    expect(component.onPut).toHaveBeenCalled();
  }));

  it('should perform a DELETE', async(() => {
    spyOn(component, 'onDelete');
    let button = fixture.debugElement.query(By.css('#btnDelete')).nativeElement;
    // let input = fixture.debugElement.query(By.css('#requestBody')).nativeElement;
    // input.value = 'foo';
    // fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    expect(component.onDelete).toHaveBeenCalled();
  }));
});
