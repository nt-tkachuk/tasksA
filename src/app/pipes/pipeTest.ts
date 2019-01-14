import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'pipeTest'
})

export class PipeTest implements PipeTransform {
  transform (value: string): any {
    return value + ' pipe test'
  }
}
