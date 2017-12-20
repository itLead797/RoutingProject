import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { ProfileComponent } from './profile.component';
import { ProfileService } from '../services/profile/profile.service';
import { LogoComponent } from '../logo/logo.component';
import { ProfileModel } from '../services/profile/profile.model';

class profileServiceMock {
  data: ProfileModel[];
  public getFiles(): ProfileModel[] {
    this.data = [
      {
      'firstName': 'john',
      'lastName': 'jones',
      'team': 'team1',
      'train': 'train1',
      'imageUrl': 'http://test'
    },
    {
      'firstName': 'jim',
      'lastName': 'smith',
      'team': 'team2',
      'train': 'train2',
      'imageUrl': 'http://test2'
    }
  ];
    return this.data;
  }
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let instance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        LogoComponent
      ],
      providers: [
        //  ProfileService,
        { provide: ProfileService, useClass: profileServiceMock }
      ],
      imports: [RouterTestingModule, FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    instance = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an image logo', () => {
    const img = instance.querySelector('#logoImg').src;
    expect(img).toContain('liberty-mutual.gif', 'display of logo');
  });

  it('should display firstName to profile page', async(() => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.ngOnInit).toHaveBeenCalled();
      const value = instance.querySelector('#firstNameFld').value;
      expect(value).toBe('john', 'expect populated firstName field');
    });
  }));

  it('should display lastName to profile page', async(() => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.ngOnInit).toHaveBeenCalled();
      const value = instance.querySelector('#lastNameFld').value;
      expect(value).toBe('jones', 'expect populated lastName field');
    });
  }));

  it('should display team to profile page', async(() => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.ngOnInit).toHaveBeenCalled();
      const value = instance.querySelector('#teamFld').value;
      expect(value).toBe('team1', 'expect populated firstName field');
    });
  }));

  it('should display train to profile page', async(() => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.ngOnInit).toHaveBeenCalled();
      const value = instance.querySelector('#trainFld').value;
      expect(value).toBe('train1', 'expect populated firstName field');
    });
  }));

  it('should display submit button to profile page', async(() => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.ngOnInit).toHaveBeenCalled();
      const submitBtn = instance.querySelector('#btnSubmit').value;
      expect(submitBtn).not.toBeUndefined();
    });
  }));
});
