import { Cuenta } from './../models/cuenta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCuentas(){
    return this.http.get(`${this.API_URI}/cuentas`);
  }

  getCuenta(id_cuenta: string){
   return this.http.get(`${this.API_URI}/cuentas/${id_cuenta}`);
  }

  deleteCuenta(id_cuenta: string){
    return this.http.delete(`${this.API_URI}/cuentas/${id_cuenta}`);
  }

  saveCuenta(Cuentas: Cuenta){
  return this.http.post(`${this.API_URI}/cuentas`, Cuentas);
  }

  updateCuenta(id: string|number, updatecuenta: Cuenta): Observable<Cuenta> {
    return this.http.put(`${this.API_URI}/cuentas/${id}`, updatecuenta);

  }
}
