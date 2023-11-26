import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTxt: string): any[] {
    if (!items || !searchTxt) {
      return items;
    }
    return items.filter(
      item => item.name.toLowerCase().indexOf(
        searchTxt.toLowerCase()
      ) !== -1);
  }
}