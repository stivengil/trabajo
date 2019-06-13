import { Empresa } from './../models/empresa';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEmpresas(){
    return this.http.get(`${this.API_URI}/empresas`);
  }

  getEmpresa(id_empresa: string){
   return this.http.get(`${this.API_URI}/empresas/${id_empresa}`);
  }

  deleteEmpresa(id_empresa: string){
    return this.http.delete(`${this.API_URI}/empresas/${id_empresa}`);
  }

  saveEmpresa(Empresas: Empresa){
  return this.http.post(`${this.API_URI}/empresas`, Empresas);
  }

  updateEmpresa(id: string|number, updateempresa: Empresa): Observable<Empresa> {
    return this.http.put(`${this.API_URI}/empresas/${id}`, updateempresa);

  }
}
