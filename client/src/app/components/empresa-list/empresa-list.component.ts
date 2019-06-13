import { EmpresaService } from './../../services/empresa.service';
import { Empresa } from './../../models/empresa';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

 

  @HostBinding('class') classes = 'row';
  empresa: Empresa = {
   
    CODIGO: '',
    DESCRIPCION: '',
    NIT: '',
    NIT_DV: '',
    DIRECCION_1: '',
    DIRECCION_2: '',
    DIRECCION_3: '',
    CIUDAD: '',
    TELEFONO: '',
    FAX: '',
    AAEREO: '',
    EMAIL: '',
    NRO_RESOLUCION_CG: '',
    NRO_RESOLUCION_RT: '',
    ESTADO: ''
   };



  edit: boolean = false;

  constructor( private empresaservicee : EmpresaService, private router: Router, private  activedRoute: ActivatedRoute) { }

  filterEmpresa ='';


  empresas: any = [];




  ngOnInit() {
    this.getempresa();
  
    


  }

  getempresa() {
    
    this.empresaservicee.getEmpresas()
      .subscribe(
        res => {
          this.empresas=res;
          
          console.log( this.empresas);
 


        },
        err => console.error(err)
      );
  }

  
}

