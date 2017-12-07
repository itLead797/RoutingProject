import { TestBed, inject } from '@angular/core/testing';
import { LessonModel } from './lesson.model';
import { LessonService } from './lesson.service';


describe('FileService', () => {
let profileService: LessonService;

  beforeEach(() => {
    profileService = new LessonService();

    TestBed.configureTestingModule({
      providers: [LessonService],
      imports: []
    });
  });

  it('should be created', inject([LessonService], (service: LessonService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an profile', () => {
    let profiles = profileService.getFiles();

     expect(profiles[0].subject).toBeDefined();
     expect(profiles[0].level).toBeDefined();
     expect(profiles[0].objective).toBeDefined();
     expect(profiles[0].notes).toBeDefined();
     expect(profiles[0].class).toBeDefined();
     expect(profiles[0].references).toBeDefined();
  });
});
