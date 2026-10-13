import { Directive, ElementRef, HostListener, inject } from '@angular/core';

const FALLBACK_SVG =
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">` +
  `<rect width="400" height="600" fill="#2a2d3a"/>` +
  `<text x="200" y="300" fill="#9aa0b4" font-family="sans-serif" font-size="24" text-anchor="middle">Sin póster</text>` +
  `</svg>`;

const FALLBACK_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(FALLBACK_SVG)}`;

/** Si la imagen del póster no carga, muestra una imagen local de respaldo. */
@Directive({
  selector: 'img[appPosterFallback]',
})
export class PosterFallbackDirective {
  private readonly img = inject<ElementRef<HTMLImageElement>>(ElementRef).nativeElement;

  @HostListener('error')
  onError(): void {
    if (this.img.src !== FALLBACK_SRC) {
      this.img.src = FALLBACK_SRC;
    }
  }
}
