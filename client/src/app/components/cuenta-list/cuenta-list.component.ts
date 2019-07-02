import { CuentasService } from './../../services/cuentas.service';
import { Cuenta } from './../../models/cuenta';
import { Component, OnInit, HostBinding ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cuenta-list',
  templateUrl: './cuenta-list.component.html',
  styleUrls: ['./cuenta-list.component.css']
})
export class CuentaListComponent implements OnInit {



  @HostBinding('class') classes = 'row';
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



  edit: boolean = false;

  constructor( private cuentaservice : CuentasService, private router: Router, private  activedRoute: ActivatedRoute) { }



  Cuentas: any = [];

  filterCuentas ='';

  ngOnInit() {
    this.getcuenta();
    


  }

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
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
}

