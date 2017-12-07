import { Injectable } from '@angular/core';
import { LessonModel } from './lesson.model';
import { LESSONDATA } from './lesson.data';
// import * as FileSaver from 'file-saver';

@Injectable()
export class LessonService {
  lessons: LessonModel[];
  __dirname = '../../../../externalFiles';

  constructor() { }

  public getFiles(): LessonModel[] {
    this.lessons = LESSONDATA;
    // FileSaver.saveAs(Blob, this.lesson);

      return this.lessons;
  }

  // beginning attempt to read files from a directory
  public getFileList() {
    let fileList = [];
    const fse = require('fs-extra');

    let fs = require('fs');
    fs.realPath(__dirname, function(err, path) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Path is: ' + path);
    });
    fs.readdir(__dirname, function(err, files) {
      if (err) { return; }
      files.forEach(function(f) {
        console.log('Files: ' + f);
      });
    });
  }

}
