import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[focusHide]'
})
export class FocusHideDirective {

  @HostListener("mousedown", ["$event"])
  public onMouseDownTrigger(event: any) {
    event.srcElement.classList.add("focus-hide")
  }

  @HostListener("focusout", ["$event"])
  public onFocusOutTrigger(event: any): void {
    event.srcElement.classList.remove("focus-hide")
  }

  constructor() { }

}
