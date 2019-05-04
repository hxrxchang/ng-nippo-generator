import { NoSanitizePipe } from './no-sanitize.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('NoSanitizePipe', () => {
  let pipe: NoSanitizePipe;
  let domSanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            sanitize: () => 'safeString',
            bypassSecurityTrustHtml: () => 'safeString',
          },
        },
      ],
    });
    domSanitizer = TestBed.get(DomSanitizer);
    pipe = new NoSanitizePipe(domSanitizer);
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
