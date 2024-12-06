import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[outsideClick]',
})
export class OutsideClickDirective {
  @Output() appClickOutside = new EventEmitter<MouseEvent>();
}
