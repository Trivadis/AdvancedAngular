import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHotkey]'
})
export class HotkeyDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appHotkey') keyCode: number;

  @Output() keyClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(kbdEvent: KeyboardEvent) {
    if (kbdEvent.keyCode === this.keyCode && kbdEvent.ctrlKey) {
      kbdEvent.preventDefault();
      this.keyClicked.emit(true);
    }
  }
}
