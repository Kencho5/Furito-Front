import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  opened = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }

  toggle() {
    this.opened = !this.opened;
  }
}
