import { Injectable } from '@angular/core';
import { UploadReportRepository } from '../repositories/upload-report-repository';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadPostUsecase {
  constructor(private uploadRepository: UploadReportRepository) {}

  uploadReport(markdown: string): Observable<any> {
    return forkJoin(this.uploadRepository.postToEsa(markdown), this.uploadRepository.postToSlack(markdown));
  }
}
