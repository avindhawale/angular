import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[beautifier]",
  standalone: true,
})
export class BeautifierDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding("style.backgroundColor") background: string = "#fff";
  @HostBinding("style.color") color: string = "#333";
  @HostBinding("style.cursor") cursor: string = "pointer";

  @HostListener("mouseenter") onMouseEnter() {
    this.background = "#1976d2";
    this.color = "#fff";
  }

  @HostListener("mouseout") onMouseOut() {
    this.background = "#fff";
    this.color = "#333";
  }
}
