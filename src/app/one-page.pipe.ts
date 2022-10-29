import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onePage'
})
export class OnePagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
