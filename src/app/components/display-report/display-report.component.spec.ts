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

    it('when reportText is empty and HTML is not rendered', () => {
      component.reportText = '';
      component.isFirstRenderHTML = true;
      component.ngOnChanges();
      expect(component.markedText).toContain(
        '<h1 id="お気持ち">お気持ち</h1>\n<h1 id="今日やったこと">今日やったこと</h1>\n<h1 id="明日次回やること">明日(次回)やること</h1>',
      );
    });

    it('when reportText is empty and HTML is already rendered', () => {
      component.reportText = '';
      component.isFirstRenderHTML = false;
      component.ngOnChanges();
      expect(component.markedText).toEqual('');
    });
  });
});
