import { Component } from '@angular/core';
import { Item } from '../item.model';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'lookup-sample',
  templateUrl: './lookup-sample.component.html',
  styleUrls: ['./lookup-sample.component.css']
})
export class LookupSampleComponent {

  inputData$: Observable<Item[]> = of([
    { id: 1, name: 'ItemA' },
    { id: 2, name: 'ItemB' },
    { id: 3, name: 'ItemC' }
  ]);
  inputData: Item[] = [
    new Item(1, 'ItemA'),
    new Item(2, 'ItemB'),
    new Item(3, 'ItemC')
  ];
  inputData1: Observable<Item[]>;
  // Item[] = [
  //   new Item(1, 'L1'),
  //   new Item(2, 'L2'),
  //   new Item(3, 'L3')
  // ]
  form = new FormGroup({
    myLookupControl: new FormControl(),
    myLookupControl1: new FormControl()
  })
  isLookupDisabled: boolean = false;
  myPlaceholder: string = "انتخاب آیتم";
  selectedItem: Item;
  selectedItem1: Item;
  onItemSelected(item: Item): void {
    this.selectedItem = item;
    //console.log(item);
    //this.isLookupDisabled = true;
    if (item.id == 1)
      this.inputData1 = of([
        new Item(1, 'ItemA1'),
        new Item(2, 'ItemB1'),
        new Item(3, 'ItemC1')
      ]);
    if (item.id == 2)
      this.inputData1 = of([
        new Item(1, 'ItemA2'),
        new Item(2, 'ItemB2'),
        new Item(3, 'ItemC2')
      ]);
      if (item.id == 3)
      this.inputData1 = of([]);
  }
  onItemSelected1(item: Item): void {
    this.selectedItem1 = item;
    console.log(item);
    //this.isLookupDisabled = true;
  }
}
