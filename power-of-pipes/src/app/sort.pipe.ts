import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    array.sort((a, b) => {
      const aValue = a[field].toLowerCase();
      const bValue = b[field].toLowerCase();
      return aValue.localeCompare(bValue);
    });

    return array;
  }

}
