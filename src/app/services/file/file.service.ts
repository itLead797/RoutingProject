import { Injectable } from '@angular/core';
import { ProfileModel } from '../../profile/profile.model';
import { PROFILEDATA } from '../../profile/profile.data';

@Injectable()
export class FileService {
  profiles: ProfileModel[];
  __dirname = '../../../_profileImages';
  constructor() { }

  public getFiles(): ProfileModel[] {
    this.profiles = PROFILEDATA;
    // this.getFileList();
    return this.profiles;
  }

  // beginning attempt to read files from a directory
  public getFileList() {
    let fileList = [];
    const fse = require('fs-extra');

    let fs = require('fs');
    fs.realPath(__dirname, function (err, path) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Path is: ' + path);

    });
    fs.readdir(__dirname, function (err, files) {
      if (err) { return; }
      files.forEach(function (f) {
        console.log('Files: ' + f);
      });
    });

    // let files = fse.readdirSync('../../../img/');
    // console.log(files);
  }

  public writeFile() {
    let jsonfile = require('jsonfile');
    let file = '/tmp/data.json';
    let obj = { name: 'JP' };

    jsonfile.writeFile(file, obj, function (err) {
      console.error(err);
    });
  }

}

