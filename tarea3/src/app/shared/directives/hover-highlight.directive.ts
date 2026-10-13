import { Directive, HostBinding, HostListener } from '@angular/core';

/** Directiva de atributo: resalta el elemento mientras el cursor está encima. */
@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  @HostBinding('class.is-highlighted') highlighted = false;

  @HostListener('mouseenter')
  onEnter(): void {
    this.highlighted = true;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.highlighted = false;
  }
}
