import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { APP_BASE_HREF, Location } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { ROUTES } from './app.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginService } from './services/login/login.service';
import { ApiComponent } from './api/api.component';
import { LogoComponent } from './logo/logo.component';


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
        RouterModule.forRoot(ROUTES)
      ],
      providers: [
        LoginService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    instance = fixture.debugElement.nativeElement;

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

  it('should render the HOME button and call the page', async(() => {
    spyOn(component, 'goHome');
    fixture.detectChanges();
    let button = instance.querySelector('#homeBtn');
    expect(button.textContent).toContain('Home', 'button renders');
    button.click();
    fixture.detectChanges();
    expect(component.goHome).toHaveBeenCalled();
  }));

  it('should render the LOGIN button and call the page', async(() => {
    spyOn(component, 'goLogin');
    fixture.detectChanges();
    let button = instance.querySelector('#loginBtn');
    expect(button.textContent).toContain('Login', 'button renders');
    button.click();
    fixture.detectChanges();
    expect(component.goLogin).toHaveBeenCalled();
  }));

  it('should render the API-TOOL button and call the page', async(() => {
    spyOn(component, 'goApi');
    fixture.detectChanges();
    let button = instance.querySelector('#apiBtn');
    expect(button.textContent).toContain('API Tool', 'button renders');
    button.click();
    fixture.detectChanges();
    expect(component.goApi).toHaveBeenCalled();
  }));

  it('should render the SEARCH button and call the page', async(() => {
    spyOn(component, 'goSearch');
    fixture.detectChanges();
    let button = instance.querySelector('#searchBtn');
    expect(button.textContent).toContain('Search', 'button renders');
    button.click();
    fixture.detectChanges();
    expect(component.goSearch).toHaveBeenCalled();
  }));

  it('should render the PROFILES button and call the page', async(() => {
    spyOn(component, 'goProfiles');
    fixture.detectChanges();
    let button = instance.querySelector('#profilesBtn');
    expect(button.textContent).toContain('Profiles', 'button renders');
    button.click();
    fixture.detectChanges();
    expect(component.goProfiles).toHaveBeenCalled();
  }));
});
