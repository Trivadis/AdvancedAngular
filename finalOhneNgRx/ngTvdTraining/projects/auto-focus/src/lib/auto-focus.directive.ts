import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[libAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  public constructor(private el: ElementRef) {}
  public ngAfterViewInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    });
  }
}
