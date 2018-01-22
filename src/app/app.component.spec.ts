import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { ROUTES } from './app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginService } from './services/login/login.service';
import { ApiComponent } from './api/api.component';
import { LogoComponent } from './logo/logo.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  let component;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SearchComponent,
        ProfileComponent,
        ApiComponent,
        LogoComponent
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot(ROUTES),
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        LoginService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    instance = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('My app');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(instance.querySelector('h1').textContent).toContain('My app');
  }));

  it('should render the HOME button', async(() => {
    let button = instance.querySelector('#homeBtn');
    expect(button.textContent).toContain('Home', 'button renders');
  }));

  it('should render the LOGIN button', async(() => {
    let button = instance.querySelector('#loginBtn');
    expect(button.textContent).toContain('Login', 'button renders');
  }));

  it('should render the API-TOOL button', async(() => {
    let button = instance.querySelector('#apiBtn');
    expect(button.textContent).toContain('API Tool', 'button renders');
  }));

  it('should render the SEARCH button', async(() => {
    let button = instance.querySelector('#searchBtn');
    expect(button.textContent).toContain('Search', 'button renders');
  }));

  it('should render the PROFILE button', async(() => {
    let button = instance.querySelector('#profileBtn');
    expect(button.textContent).toContain('Profile', 'button renders');
  }));

});
