import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() catagories: string[];
  @Input() selected: string;

  @ViewChild('hamburger') hamburger: ElementRef;

  mobileMenuOpen: boolean = false;

  constructor() {}

  public menuToggle() {
    this.mobileMenuOpen = !this.mobileMenuOpen;  
  }
}
