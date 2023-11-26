import { Component } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'lookup-sample',
  templateUrl: './lookup-sample.component.html',
  styleUrls: ['./lookup-sample.component.css']
})
export class LookupSampleComponent {

  inputData: Item[] = [
    new Item(1, 'ItemA'),
    new Item(2, 'ItemB'),
    new Item(3, 'ItemC')
  ];

  selectedItem: Item;

  onItemSelected(item: Item): void {
    this.selectedItem = item;
    console.log(item);
  }
}
