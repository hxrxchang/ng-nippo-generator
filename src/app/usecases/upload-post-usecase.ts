import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, forkJoin, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { UploadReportRepository } from '../repositories/upload-report-repository';
import { DialogComponent } from './../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UploadPostUsecase {
  constructor(private uploadRepository: UploadReportRepository, private matDialog: MatDialog) {}

  uploadReport(markdown: string): Observable<any> {
    return forkJoin(this.uploadRepository.postToEsa(markdown), this.uploadRepository.postToSlack(markdown)).pipe(
      tap(() => {
        this.matDialog.open(DialogComponent, {
          width: '50vw',
          data: {
            message: '投稿が完了しました',
          },
        });
      }),
      catchError(() => {
        this.matDialog.open(DialogComponent, {
          width: '50vw',
          data: {
            message: '投稿に失敗しました',
          },
        });
        return of();
      }),
    );
  }
}
