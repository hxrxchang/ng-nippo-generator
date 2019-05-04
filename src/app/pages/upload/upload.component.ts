import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { reportTemplate } from './../../domains/report-domain';
import { UploadPostUsecase } from 'src/app/usecases/upload-post-usecase';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  uploadReportFormGroup = new FormGroup({
    reportText: new FormControl('', Validators.required),
  });
  reportTemplate = reportTemplate;

  constructor(private uploadUsecase: UploadPostUsecase) {}

  ngOnInit() {}

  async onClickedUploadButton() {
    await this.uploadUsecase.uploadReport(this.uploadReportFormGroup.value.reportText).toPromise();
  }
}
