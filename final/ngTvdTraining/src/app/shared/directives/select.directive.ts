import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer } from '@angular/core';

@Directive({ selector: '[appSelect]' })
export class SelectDirective {
  @HostBinding('class.selected')
  isSelected = false;

  constructor(private el: ElementRef, private renderer: Renderer) {}
  @Input()
  backgroundColor: string;

  @HostListener('dblclick')
  doubleClick() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  // @HostListener('mouseover')
  // @HostListener('mouseleave')
  @HostListener('click')
  setSelected() {
    this.isSelected = !this.isSelected;
  }
}
