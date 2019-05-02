import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { reportTemplate } from './../../domains/report-domain';

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
  constructor() {}

  ngOnInit() {}
}
