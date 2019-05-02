import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-display-report',
  templateUrl: './display-report.component.html',
  styleUrls: ['./display-report.component.sass'],
})
export class DisplayReportComponent implements OnInit, OnChanges {
  @Input()
  reportText: string;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}
}
