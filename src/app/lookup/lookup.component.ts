import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from './item.model';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

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

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.options;
    this.searchControl.valueChanges.subscribe((value: string) => {
      this.filteredOptions = this.filterOptions(value);
    });
  }

  onSelectChange(event: MatSelectChange): void {
    this.itemSelected.emit(event.value);
  }

  private filterOptions(value: string): Item[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
