import { TestBed, inject } from '@angular/core/testing';
import { LessonModel } from './lesson.model';
import { LessonService } from './lesson.service';


describe('FileService', () => {
let lessonService: LessonService;

  beforeEach(() => {
    lessonService = new LessonService();

    TestBed.configureTestingModule({
      providers: [LessonService],
      imports: []
    });
  });

  it('should be created', inject([LessonService], (service: LessonService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an profile', () => {
    let lessons = lessonService.getFiles();

     expect(lessons[0].subject).toBeDefined();
     expect(lessons[0].level).toBeDefined();
     expect(lessons[0].objective).toBeDefined();
     expect(lessons[0].notes).toBeDefined();
     expect(lessons[0].class).toBeDefined();
     expect(lessons[0].references).toBeDefined();
  });
});
