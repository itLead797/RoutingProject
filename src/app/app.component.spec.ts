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
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My app');
  }));



});
