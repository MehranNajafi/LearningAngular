import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

// transform(items: any[], searchTxt: string): any[] {
//     if (!items || !searchTxt) {
//       return items;
//     }
//     return items.filter(
//       item => item.name.toLowerCase().indexOf(
//         searchTxt.toLowerCase()
//       ) !== -1);
//   }
transform(items: Observable<Item[]>, searchTxt: string): Observable<Item[]> {
  if (!items || !searchTxt) {
    return items;
  }
  return items.pipe(map((items: Item[]) => {
    let fl = items.filter(
      (item:Item) => item.name.toLowerCase().indexOf(
        searchTxt.toLowerCase()
      ) !== -1);
    //return (fl.length > 0) ? fl[0] : new Item(0, '');
    return fl;
  }));

  // return items.filter(
  //   (item:Item) => item.name.toLowerCase().indexOf(
  //     searchTxt.toLowerCase()
  //   ) !== -1);
}
}