import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReportComponent } from './display-report.component';
import { NoSanitizePipe } from './../../pipes/no-sanitize.pipe';

describe('DisplayReportComponent', () => {
  let component: DisplayReportComponent;
  let fixture: ComponentFixture<DisplayReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayReportComponent, NoSanitizePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should call ngOnChange()', () => {
    it('when reportText is not empty string', () => {
      component.reportText = '# this is h1 text';
      component.ngOnChanges();
      expect(component.markedText).toContain('<h1 id="this-is-h1-text">this is h1 text</h1>');
    });

    it('when reportText is empty', () => {
      component.reportText = '';
      component.ngOnChanges();
      expect(component.markedText).toEqual('');
    });
  });
});
