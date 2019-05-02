import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass'],
})
export class UploadComponent implements OnInit {
  uploadReportFormGroup = new FormGroup({
    reportText: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit() {}
}
