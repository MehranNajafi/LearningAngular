import { Component, ElementRef, ViewChild } from '@angular/core';
import Popper from 'popper.js';

@Component({
  selector: 'popperrxample',
  template: `
    <div>
      <button #referenceButton>Reference Button</button>
      <div #popperContent class="popper-content">
        This is the Popper content.
      </div>
    </div>
  `,
  styleUrls: ['./popperrxample.component.css']
})
export class PopperrxampleComponent {
  @ViewChild('referenceButton') referenceButton!: ElementRef;
  @ViewChild('popperContent') popperContent!: ElementRef;

  popperInstance: Popper | null = null;

  ngAfterViewInit(): void {
    this.createPopper();
  }

  createPopper(): void {
    const referenceElement = this.referenceButton.nativeElement;
    const popperElement = this.popperContent.nativeElement;

    this.popperInstance = new Popper(referenceElement, popperElement, {
      placement: 'right',
      modifiers: {
        preventOverflow: {
          boundariesElement: 'viewport'
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }
  }
}
