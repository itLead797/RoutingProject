import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { LogoComponent } from '../logo/logo.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LogoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    instance = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the home image', () => {
    const img = instance.querySelector('#homeImg').src;
    expect(img).toContain('home.png');
  });

  it('should display an the logo image', () => {
    const img = instance.querySelector('#logoImg').src;
    expect(img).toContain('liberty-mutual.gif');
  });
});
