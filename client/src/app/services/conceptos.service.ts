


import { Concepto } from './../models/Concepto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConceptosService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getConceptos(){
    return this.http.get(`${this.API_URI}/conceptos`);
  }

  getConcepto(id_post: string){
   return this.http.get(`${this.API_URI}/conceptos/${id_post}`);
  }

  deleteConcepto(id_post: string){
    return this.http.delete(`${this.API_URI}/conceptos/${id_post}`);
  }

  saveConcepto(conceptoss: Concepto){
  return this.http.post(`${this.API_URI}/conceptos`, conceptoss);
  }

  updateConcepto(id: string|number, updateconceptos: Concepto): Observable<Concepto> {
    return this.http.put(`${this.API_URI}/conceptos/${id}`, updateconceptos);

  }
}