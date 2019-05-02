import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as marked from 'marked';
import { reportTemplate } from './../../domains/report-domain';

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.scss'],
})
export class DisplayReportComponent implements OnInit, OnChanges {
  @Input()
  reportText: string;

  markedText = '';

  isFirstRenderHTML = true;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.reportText) {
      this.markedText = marked(this.reportText);
      this.isFirstRenderHTML = false;
    } else if (this.isFirstRenderHTML) {
      this.markedText = marked(reportTemplate);
    } else {
      this.markedText = '';
    }
  }
}
