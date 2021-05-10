import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Construction()', () => {
    it('should create', waitForAsync(() => {
      // Arrange, Act, Assert
      expect(component).toBeTruthy();
    }));
  });

  describe('menuToggle()', () => {
    it('should set the boolean value of mobileMenuOpen from FALSE to TRUE', waitForAsync(() => {
      // Arrange
      component.mobileMenuOpen = false;

      // Act
      component.menuToggle();

      // Assert
      expect(component.mobileMenuOpen).toEqual(true);
    }));

    it('should set the boolean value of mobileMenuOpen from TRUE to FALSE', waitForAsync(() => {
      // Arrange
      component.mobileMenuOpen = true;

      // Act
      component.menuToggle();

      // Assert
      expect(component.mobileMenuOpen).toEqual(false);
    }));
  });

  describe('HTML Template', () => {
    it('should display the header bar with the available catagories', waitForAsync(() => {
      // Arrange
      component.catagories = ['mock1', 'mock2', 'mock3'];

      // Act
      fixture.detectChanges();

      // Assert
      const header = fixture.nativeElement.querySelector('.header-bar');
      expect(header).toBeTruthy();
      const catagories = fixture.nativeElement.querySelectorAll('.wide-nav .catagory');
      expect(catagories.length).toEqual(4);
    }));

    it('should display the mobile menu if mobileMenuOpen = TRUE', waitForAsync(() => {
      // Arrange
      component.mobileMenuOpen = true;

      // Act
      fixture.detectChanges();

      // Assert
      const mobileMenu = fixture.nativeElement.querySelector('.mobile-menu');
      expect(mobileMenu).toBeTruthy();
      expect(mobileMenu).toHaveClass('open');
    }));

    it('should NOT display the mobile menu if mobileMenuOpen = FALSE', waitForAsync(() => {
      // Arrange
      component.mobileMenuOpen = false;

      // Act
      fixture.detectChanges();

      // Assert
      const mobileMenu = fixture.nativeElement.querySelector('.mobile-menu');
      expect(mobileMenu).toBeTruthy();
      expect(mobileMenu).not.toHaveClass('open');
    }));
  });
});
