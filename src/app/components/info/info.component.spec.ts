import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Construction()', () => {
    it('should create', () => {
      // Arrange, Act, Assert
      expect(component).toBeTruthy();
    });
  });

  describe('HTML Template', () => {
    it('should display product information', async(() => {
      // Arrange, Act
      fixture.detectChanges();

      // Assert
      const article_title = fixture.nativeElement.querySelectorAll('h1');
      expect(article_title[0].textContent).toContain('CONTINOUSLY MAC');

      const article_intro = fixture.nativeElement.querySelectorAll(
        '#introduction'
      );
      expect(article_intro[0].textContent).toContain(
        'Continuously Mac is a news aggregator'
      );
    }));
  });
});
