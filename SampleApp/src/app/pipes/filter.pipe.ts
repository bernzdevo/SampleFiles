import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args?: string, filterBy?: string): any {

    if (!args) { return value; }

    args = args.toLowerCase();
    return value.filter(prod => {
      if (filterBy == "ID") {
        return prod.id == args;
      } else if (filterBy == "Name") {
        return prod.productName.toLowerCase().includes(args);
      } else if (filterBy == "Price") {
        return (prod.productPrice) == parseInt(args);
      } else {
        return prod.productName.toLowerCase().includes(args);
      }
    });


  }

}
