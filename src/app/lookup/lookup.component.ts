import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from './item.model';
import { FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { pipe } from 'rxjs';

@Component({
  selector: 'lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
  @Input() control: FormControl;
  @Input() isDisabled: boolean;
  @Input() placeholder: string;
  @Input() options: Item[] = [];
  @Input() options$: Observable<Item[]>;
  @Output() itemSelected = new EventEmitter<Item>();

  //searchControl = new FormControl();
  filteredOptions: Item[] = [];
  filteredOptions$: Observable<Item[]>;
  searchTxt: any;

  constructor() { }

  ngOnInit(): void {
    //this.searchControl.setValue(this.formControl.value);
    // this.filteredOptions$ = this.options$?.pipe(map((options: Item[]) => {
    //   const data = options as Item[];
    //   return data;
    // }));
    // this.control.valueChanges.subscribe((value: Item) => {
    //   //this.filteredOptions$ = 
    //   this.filterOptions(value);
    // });
  }
  onSelectChange(event: Item): void {
    this.itemSelected.emit(event);
  }
  onClosed() {
    //this.control.reset();
    this.searchTxt = null;
    //this.filteredOptions$ = this.filterOptions(new Item(-1, ''));
    //this.isDisabled= false;
  }
  onOpened() {
    //this.filteredOptions = this.options;
  }
  // private filterOptions(value: Item): Item[] {
  //   const filterValue = value.name.toLowerCase();
  //   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  // }
  // private filterOptions(value: Item): Observable<Item[]> {
  //   const filterValue = value?.name.toLowerCase();
    
  //     return this.options$?.pipe(map((options: Item[]) => {
  //       let fl = options.filter((option: Item) => option.name.toLowerCase().includes(filterValue));
  //       //return (fl.length > 0) ? fl[0] : new Item(0, '');
  //       return fl;
  //     }));

  //   // return this.options$.pipe(
  //   //   filter(optionarr => optionarr.some(option=> option.name.toLowerCase().includes(filterValue))));
  // }
}