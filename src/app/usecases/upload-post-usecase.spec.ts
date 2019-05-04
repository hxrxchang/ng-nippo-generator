import { UploadPostUsecase } from './upload-post-usecase';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UploadReportRepository } from '../repositories/upload-report-repository';

describe('UploadPostUsecase', () => {
  let usecase: UploadPostUsecase;
  let repository: UploadReportRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    usecase = TestBed.get(UploadPostUsecase);
    repository = TestBed.get(UploadReportRepository);
  });

  it('should create an instance', () => {
    expect(usecase).toBeTruthy();
  });

  it('call uploadReport() method', () => {
    const markdown = '# this is test';
    spyOn(repository, 'postToEsa');
    usecase.uploadReport(markdown);
    expect(repository.postToEsa).toHaveBeenCalledWith(markdown);
  });
});
