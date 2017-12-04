import { Injectable } from '@angular/core';
import { ProfileModel } from '../../profile/profile.model';
import { PROFILEDATA } from '../../profile/profile.data';

@Injectable()
export class FileService {
  profiles: ProfileModel[];

  constructor() { }

  public getFiles(): ProfileModel[] {
    this.profiles = PROFILEDATA;
    return this.profiles;
  }

  // https://www.npmjs.com/package/jsonfile
  // public writeFile() {
  //   let jsonfile = require('jsonfile');
  //   let file = '/tmp/data.json';
  //   let obj = { name: 'JP' };

  //   jsonfile.writeFile(file, obj, function (err) {
  //     console.error(err);
  //   });
  // }

}

