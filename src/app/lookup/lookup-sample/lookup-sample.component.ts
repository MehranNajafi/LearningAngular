import { Component } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'lookup-sample',
  templateUrl: './lookup-sample.component.html',
  styleUrls: ['./lookup-sample.component.css']
})
export class LookupSampleComponent {

  selectedItem: Item | undefined;

  inputData: Item[] = [
    new Item(1, 'Item A'),
    new Item(2, 'Item B'),
    new Item(3, 'Item C')
  ];

  onItemSelected(item: Item): void {
    this.selectedItem = item;
  }
}
