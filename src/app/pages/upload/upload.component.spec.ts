import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UploadPostUsecase } from 'src/app/usecases/upload-post-usecase';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let uploadUsecase: UploadPostUsecase;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [UploadComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    uploadUsecase = TestBed.get(UploadPostUsecase);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call onClickedUploadButton() method', () => {
    spyOn(uploadUsecase, 'uploadReport');
    component.onClickedUploadButton();
    expect(uploadUsecase.uploadReport).toHaveBeenCalled();
  });
});
