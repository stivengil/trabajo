import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroconceptocuenta'
})
export class FiltroconceptocuentaPipe implements PipeTransform {
  transform(value: any, arg: any): any {
 
    const resultConceptocuenta = [];
    for (const conceptocuenta of value) {
      if (conceptocuenta.id_conceptocuentas.toLowerCase().indexOf(arg) > -1) {
        resultConceptocuenta.push(conceptocuenta)      };
    };
    return resultConceptocuenta;
  }







}