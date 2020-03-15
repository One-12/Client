import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value && typeof value === "string") ? moment(value).fromNow() : "Invalid Date";
  }
}
