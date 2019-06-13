import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroempresa'
})
export class FiltroempresaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
 
    const resultEmpresa = [];
    for (const empresa of value) {
      if (empresa.DESCRIPCION.toLowerCase().indexOf(arg) > -1) {
        resultEmpresa.push(empresa)      };
    };
    return resultEmpresa;
  }


}