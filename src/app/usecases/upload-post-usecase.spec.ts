import { UploadPostUsecase } from './upload-post-usecase';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UploadPostUsecase', () => {
  let usecase: UploadPostUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    usecase = TestBed.get(UploadPostUsecase);
  });

  it('should create an instance', () => {
    expect(usecase).toBeTruthy();
  });
});
