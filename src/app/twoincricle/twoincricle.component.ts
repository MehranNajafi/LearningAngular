import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'twoincricle',
  templateUrl: './twoincricle.component.html',
  styleUrls: ['./twoincricle.component.css'],
})
export class TwoincricleComponent {
  @Input('is-fav') isFav: boolean = false;
  @Output() change = new EventEmitter();
  toggleIcon() {
    this.isFav = !this.isFav;
    this.change.emit({newValue:this.isFav});
  }
}
export interface PassEvent {
  newValue:boolean;
}
