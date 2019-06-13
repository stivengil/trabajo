import { ConceptoCuenta } from './../models/Concepto-cuenta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConceptoCuentaService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getConceptoCuentas(){
    return this.http.get(`${this.API_URI}/conceptocuenta`);
  }

  getConceptoCuenta(id_concepto_cuenta: string){
   return this.http.get(`${this.API_URI}/conceptocuenta/${id_concepto_cuenta}`);
  }

  deleteConceptoCuenta(id_concepto_cuenta: string){
    return this.http.delete(`${this.API_URI}/conceptocuenta/${id_concepto_cuenta}`);
  }

  saveConceptoCuenta(conceptoss: ConceptoCuenta){
  return this.http.post(`${this.API_URI}/conceptocuenta`, conceptoss);
  }

  updateConceptoCuenta(id: string|number, updateconceptos: ConceptoCuenta): Observable<ConceptoCuenta> {
    return this.http.put(`${this.API_URI}/conceptocuenta/${id}`, updateconceptos);

  }
}
