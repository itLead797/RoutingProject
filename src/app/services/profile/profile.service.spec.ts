import { TestBed, inject } from '@angular/core/testing';
import { ProfileModel } from './profile.model';
import { ProfileService } from './profile.service';


describe('FileService', () => {
let fileService: ProfileService;

  beforeEach(() => {
    fileService = new ProfileService();

    TestBed.configureTestingModule({
      providers: [ProfileService],
      imports: []
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an profile', () => {
    let profiles = fileService.getFiles();

     expect(profiles[0].firstName).toBeDefined();
     expect(profiles[0].lastName).toBeDefined();
     expect(profiles[0].team).toBeDefined();
     expect(profiles[0].train).toBeDefined();
     expect(profiles[0].imageUrl).toBeDefined();
  });
});
