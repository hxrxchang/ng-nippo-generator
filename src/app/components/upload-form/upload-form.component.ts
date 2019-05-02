import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.sass'],
})
export class UploadFormComponent implements OnInit {
  @Input()
  uploadReportFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {}
}
