import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Construction()', () => {
    it('should create', waitForAsync(() => {
      // Arrange, Act, Assert
      expect(component).toBeTruthy();
    }));
  });

  describe('HTML Template', () => {
    it('should display the footer', waitForAsync(() => {
      // Arrange, Act
      fixture.detectChanges();

      // Assert
      const article_footer = fixture.nativeElement.querySelectorAll('footer');
      expect(article_footer[0].textContent).toContain(
        'Developed by Steven Martin'
      );
      expect(article_footer[0].textContent).toContain(
        'Continuously Mac is also available as an iOS App.'
      );
    }));
  });
});
