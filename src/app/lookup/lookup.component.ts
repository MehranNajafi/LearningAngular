import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from './item.model';
import { FormControl } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
  @Input() options: Item[] = [];
  @Output() itemSelected = new EventEmitter<Item>();

  searchControl = new FormControl();
  filteredOptions: Item[] = [];
  searchTxt: any;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.options;
    this.searchControl.valueChanges.subscribe((value: Item) => {
      this.filteredOptions = this.filterOptions(value);
    });
  }
  onSelectChange(event: Item): void {
    this.itemSelected.emit(event);
  }
  onClosed() {
    this.searchTxt = null;
    this.filteredOptions = this.filterOptions(new Item(-1, ''));
  }

  private filterOptions(value: Item): Item[] {
    const filterValue = value.name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}