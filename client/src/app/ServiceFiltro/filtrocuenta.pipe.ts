import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocuenta'
})
export class FiltrocuentaPipe implements PipeTransform {


  transform(value: any, arg: any): any {
 
    const resultCuenta = [];
    for (const cuenta of value) {
      if (cuenta.CODIGO.toLowerCase().indexOf(arg) > -1) {
        resultCuenta.push(cuenta)      };
    };
    return resultCuenta;
  }


}
