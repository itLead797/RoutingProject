import { TestBed, inject } from '@angular/core/testing';
import { ProfileModel } from '../../profile/profile.model';
import { FileService } from './file.service';


describe('FileService', () => {
let fileService: FileService;

  beforeEach(() => {
    fileService = new FileService();

    TestBed.configureTestingModule({
      providers: [FileService],
      imports: []
    });
  });

  it('should be created', inject([FileService], (service: FileService) => {
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
