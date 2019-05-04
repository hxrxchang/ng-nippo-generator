import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
})
export class UploadFormComponent implements OnInit {
  @Input()
  uploadReportFormGroup: FormGroup;
  @Input()
  reportTemplate: string;

  constructor() {}

  ngOnInit() {
    this.uploadReportFormGroup.controls.reportText.setValue(this.reportTemplate);
  }
}
