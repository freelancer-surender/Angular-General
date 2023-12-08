import { Pipe, PipeTransform } from '@angular/core';
import { StateService } from './state.service';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  constructor(private stateService: StateService) {}

  transform(id: number, ...args: unknown[]): unknown {
    return this.stateService.getState(id)?.name;
  }

}
