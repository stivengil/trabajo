import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroconceptcuen'
})
export class FiltroconceptcuenPipe implements PipeTransform {

  transform(value: any, arg: any): any {
 
    const resultCC = [];
    for (const Cuen of value) {
      if (Cuen.id_concepto.toLowerCase().indexOf(arg) > -1) {
        resultCC.push(Cuen)      };
    };
    return resultCC;
  }
}
