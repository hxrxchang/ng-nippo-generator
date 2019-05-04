import { UploadReportRepository } from './upload-report-repository';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UploadReportRepository', () => {
  let repository: UploadReportRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    repository = TestBed.get(UploadReportRepository);
  });

  it('should create an instance', () => {
    expect(repository).toBeTruthy();
  });
});
