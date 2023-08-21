import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(public el: ElementRef) {}
  @Input('appInputFormat') format!: string;

  @HostListener('focus') onFocus() {
    console.log('onFocus');
  }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lower')
      this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }
}
