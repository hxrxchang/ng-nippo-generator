import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.scss'],
})
export class DisplayReportComponent implements OnInit, OnChanges {
  @Input()
  reportText: string;

  markedText = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.reportText) {
      this.markedText = marked(this.reportText);
    } else {
      this.markedText = '';
    }
  }
}
