import { ProfileModel } from './profile.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file/file.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  profiles: ProfileModel[] = [];

  constructor(private fileService: FileService) {
  }

  ngOnInit(): any {
    this.profiles = this.fileService.getFiles();
    console.log('Profile List' + this.profiles);
    return this.profiles;
  }

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit() {
  //   this.route.params.subscribe((params) => this.username = params.username);
  // }

}
