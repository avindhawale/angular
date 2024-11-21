import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[highlighter]",
  standalone: true,
})
export class HighlighterDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, "highlight-product");
    console.log("enter");
  }
  @HostListener("mouseout") onMouseOut() {
    console.log("out");
    this.renderer.removeClass(this.element.nativeElement, "highlight-product");
  }
}
