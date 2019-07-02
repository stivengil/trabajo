import { ConceptoCuentaService } from './../../services/concepto-cuenta.service';
import { CuentasService } from './../../services/cuentas.service';
import { EmpresaService } from './../../services/empresa.service';

import { ConceptoCuenta } from './../../models/Concepto-cuenta';
import { Cuenta } from './../../models/cuenta';
import { Empresa } from './../../models/empresa';


import { Component, OnInit, HostBinding ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-concepto-cuenta',
  templateUrl: './concepto-cuenta.component.html',
  styleUrls: ['./concepto-cuenta.component.css']
})
export class ConceptoCuentaComponent implements OnInit {

  @Input() id_concepto1: number;



  @HostBinding('class') classes = 'row';
  conceptocuenta: ConceptoCuenta = {
  
    id_conceptocuentas: 0,
    id_emp: "",
    id_concepto: 0,
    id_cuenta: ""  

};
guardar: ConceptoCuenta = {
  
  id_conceptocuentas: 0,
  id_emp: "",
  id_concepto: 0,
  id_cuenta: ""  

};

update: ConceptoCuenta = {
  
  id_conceptocuentas: 0,
  id_emp: "",
  id_concepto: 0,
  id_cuenta: ""  

};



  edit: boolean = false;

  constructor(  private empresaservicee : EmpresaService,private cuentaservice : CuentasService, private conceptocuentaservice : ConceptoCuentaService, private router: Router, private  activedRoute: ActivatedRoute) { }


  filterConceptocuenta ="";
  conceptocuentas: any = [];




  ngOnInit() {
    this. getconceptoCuenta();
    this.getcuenta();
    this.getempresa();
  
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id){
    
      this.conceptocuentaservice.getConceptoCuenta(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.conceptocuenta = res;
          this.edit = true;
        },
        err => console.error(err)
      ) 
    }

  }

  getconceptoCuenta() {
    
    this.conceptocuentaservice.getConceptoCuenta(this.id_concepto1)
      .subscribe(
        res => {
          this.conceptocuentas = res;
          this.update=res;
          
          console.log(res);

        },
        err => console.error(err)
      );
  }

  deleteconceptocuenta(id_conceptocuentas) {
    alert(this.conceptocuenta.id_conceptocuentas)
    this.conceptocuentaservice.deleteConceptoCuenta(id_conceptocuentas)
      .subscribe(
        res => {
          console.log(res);
          this.getconceptoCuenta();
        },
        err => console.error(err)
      )
  }

 

  
  saveNewConceptocuenta(){
    delete this.guardar.id_conceptocuentas;
    this.guardar.id_emp=this.conceptocuenta.id_emp;
   this.guardar.id_concepto=this.id_concepto1;
    this.guardar.id_cuenta=this.conceptocuenta.id_cuenta;
   console.log(this.guardar);
   console.log(this.guardar);
   console.log(this.guardar);
   console.log(this.guardar);

 


    this.conceptocuentaservice.saveConceptoCuenta(this.guardar)
    .subscribe(
      res => {
    
      this. getconceptoCuenta();
      },
      err => alert("datos erroneos")
    )
  }
  

  updateConceptocuenta(conceptocuenta){
    this.guardar.id_conceptocuentas=this.conceptocuenta.id_conceptocuentas;
    this.guardar.id_emp=this.conceptocuenta.id_emp;
    this.guardar.id_concepto=this.id_concepto1;
    console.log(this.conceptocuenta)
    console.log("mirando")
    console.log(this.update)
    this.conceptocuentaservice.updateConceptoCuenta(this.guardar.id_conceptocuentas,this.guardar)
    .subscribe(
      res =>{
        this.conceptocuenta = conceptocuenta
        console.log(res);

        this.conceptocuenta.id_cuenta=this.guardar.id_cuenta;

        this. getconceptoCuenta();
        
      },
      err =>  {

        console.log(err)

      alert("hola")
      }
    )
    
  }

  viewModal(conceptocuenta){

    console.log(conceptocuenta)
    this.conceptocuenta = conceptocuenta

    
  }

  viewModalupdate(conceptocuenta){

    console.log(conceptocuenta)
   
    this.update=conceptocuenta
    
  }


 // cuentas   
 cuenta: Cuenta = {
   
    
  CODIGO: "",
  ID_TIPOCTA: "",
  ID_CTANIV1: "",
  ID_CTANIV2: "",
  ID_CTANIV3: "",
  ID_CTANIV4: "",
  ID_CTANIV5: "",
  ID_CTANIV6: "",
  ID_CTANIV7: "",
  ID_CTANIV8: "",
  DESCRIPCION: "",
  NIVEL: "",
  CUENTA_PADRE: "",
  TIPO: "",
  NATURALEZA: "",
  FMTO_EDICION: "",
  UNIDAD_NEGOCIO: "",
 };

 Cuentas: any = [];

 getcuenta() {
    
  this.cuentaservice.getCuentas()
    .subscribe(
      res => {
        this.Cuentas=res;
        
        console.log( this.Cuentas);



      },
      err => console.error(err)
    );
}

viewModalecuenta(cuenta){
  console.log(cuenta)
  this.cuenta = cuenta

}
keyword = 'CODIGO';
selectEvent(item) {
  console.log(item); // do something with selected item
  this.conceptocuenta.id_cuenta=item.CODIGO; 
}
 
 onChangeSearch(val: string) {
   // fetch remote data from here
   // And reassign the 'data' which is binded to 'data' property.
 }
 
 onFocused(e){
   // do something when input is focused
 }

//empresa

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


   empresas: any = [];
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
  viewModalempresa(conceptocuenta){




  this.conceptocuenta = conceptocuenta

}

keyword1 = 'CODIGO';

selectEvent1(item) {
 console.log(item);
 this.conceptocuenta.id_emp=item.CODIGO;

 // do something with selected item
}

onChangeSearch1(val: string) {
  // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused1(e){
  // do something when input is focused
}



keyword2 = 'CODIGO';

selectEvent2(item) {
 console.log(item);
 console.log(item);
 console.log(item);
 console.log("prueba");
 console.log(this.conceptocuenta)
 this.guardar.id_cuenta=item.CODIGO;

 // do something with selected item
}

onChangeSearch2(val: string) {
 val=this.conceptocuenta.id_cuenta; // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused2(e){
  e=this.conceptocuenta.id_cuenta;
  // do something when input is focused
}
}