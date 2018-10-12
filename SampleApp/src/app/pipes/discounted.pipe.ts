import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discounted'
})
export class DiscountedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   //console.log(value);
    if(args>0){
      return (value - args);
    }
    else{
      return value;
    }
    
  }

}
