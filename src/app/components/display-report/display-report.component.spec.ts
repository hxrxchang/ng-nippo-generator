import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReportComponent } from './display-report.component';

describe('DisplayReportComponent', () => {
  let component: DisplayReportComponent;
  let fixture: ComponentFixture<DisplayReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayReportComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReportComponent);
    component = fixture.componentInstance;
    component.reportText = '# this is h1 text';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnChange()', () => {
    component.ngOnChanges();
    expect(component.markedText).toContain('<h1 id="this-is-h1-text">this is h1 text</h1>');
  });
});
