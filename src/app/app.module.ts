import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ApiComponent } from './api/api.component';
import { LogoComponent } from './logo/logo.component';

import { LoginService } from './services/login/login.service';
import { ProfileService } from './services/profile/profile.service';
import { LessonService } from './services/lesson/lesson.service';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'api', component: ApiComponent},
  {path: '**', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    ProfileComponent,
    ApiComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LoginService,
    ProfileService,
    LessonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
