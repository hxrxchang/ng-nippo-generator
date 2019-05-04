import { Injectable } from '@angular/core';
import { UploadReportRepository } from '../repositories/upload-report-repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadPostUsecase {
  constructor(private uploadRepository: UploadReportRepository) {}

  uploadReport(markdown: string): Observable<any> {
    return this.uploadRepository.postToEsa(markdown);
  }
}
