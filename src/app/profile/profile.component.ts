import { ProfileModel } from '../services/profile/profile.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() submitted = false;
  username: string;
  profile: ProfileModel[] = [];

  model = new ProfileModel();

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): any {
    this.profile = this.profileService.getFiles();
    // console.log('Profile List' + JSON.stringify(this.profile));
    this.model = this.profile[0]; // see commented out ngOnInit
    console.log(this.profile);
    console.log(this.model);
    return this.profile;
  }

  onSubmit() {
    this.submitted = true;
    // for (let i = 0; i < this.loginData.length; i++) {
    //   if (this.loginData[i].login === this.model.login && this.loginData[i].password === this.model.password) {
    //     this.verified = true;
    //   }
    // }
  }

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit() {
  //   this.route.params.subscribe((params) => this.username = params.username);
  // }

}
