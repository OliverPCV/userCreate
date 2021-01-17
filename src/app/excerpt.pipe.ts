import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, max: number, dots: string): any {


    if (value.length + dots.length > max) {
      return value.substring(0, max) + dots;
    } else { return value; }
  }

}
