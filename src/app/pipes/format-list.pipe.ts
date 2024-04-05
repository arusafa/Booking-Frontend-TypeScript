import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatList'
})
export class FormatListPipe implements PipeTransform {
  transform(value: any): string {
    // Your transformation logic here
    return Object.entries(value)
      .filter(([key, val]) => key !== '_id' && val)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1').trim())
      .join(', ');
  }
}
