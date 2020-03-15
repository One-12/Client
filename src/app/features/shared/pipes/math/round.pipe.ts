import { Pipe, PipeTransform } from '@angular/core';

import { applyPrecision } from "../../utils/utils";

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value ? applyPrecision(value, 0) : '';
  }

}
