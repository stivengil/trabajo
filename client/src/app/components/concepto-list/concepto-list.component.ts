import { ConceptosService } from './../../services/conceptos.service';
import { Concepto } from './../../models/Concepto';
import { Component, OnInit, HostBinding,Input,Output,EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConceptoCuenta } from './../../models/Concepto-cuenta';





@Component({
  selector: 'app-concepto-list',
  templateUrl: './concepto-list.component.html',
  styleUrls: ['./concepto-list.component.css']
})
export class ConceptoListComponent implements OnInit {
  
  // Event Emitter: Name must be {var}+Change
  // because [(views)] translates to [views] & (viewChange)





  @HostBinding('class') classes = 'row';
  concepto: Concepto = {
    id_concepto: 0,
    concepto_desc: '',
 
};


conceptocuenta: ConceptoCuenta = {
  id_conceptocuentas: 0,
  id_emp: '',
  id_concepto: 0,
  id_cuenta: '',

};
  edit: boolean = false;

  constructor( private conceptoservice : ConceptosService, private router: Router, private  activedRoute: ActivatedRoute) { }

  Conceptos: any = [];
  filterConcepto ='';
  

  ngOnInit() {
    this.getconcepto();
    
    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id){
    
      this.conceptoservice.getConcepto(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.concepto = res;
          this.edit = true;
        },
        err => console.error(err)
      ) 
    }

  }

  getconcepto() {
    
    this.conceptoservice.getConceptos()
      .subscribe(
        res => {
          this.Conceptos = res;
          
          console.log(res);

        },
        err => console.error(err)
      );
  }

  deleteconcepto(id: string) {
    this.conceptoservice.deleteConcepto(id)
      .subscribe(
        res => {
          console.log(res);
          this.getconcepto();
        },
        err => console.error(err)
      )
  }

  saveNewConcepto(){
    delete this.concepto.id_concepto;


    this.conceptoservice.saveConcepto(this.concepto)
    .subscribe(
      res => {
      console.log(res);
      this.getconcepto();
      },
      err => console.error(err)
    )
  }
  
  updateConceptoo(concepto){
  
  
    console.log(concepto)
    this.conceptoservice.updateConcepto(concepto.id_concepto,concepto)
    .subscribe(
      res =>{
        console.log(res);
        this.concepto = concepto
          console.log(concepto)
      
        this.getconcepto();
        
   
      },
      err => console.error(err)
    )
    
  }

  viewModal(concepto){
    console.log(concepto)
    this.concepto = concepto
    this.conceptocuenta.id_concepto = concepto.id_concepto
    console.log( this.conceptocuenta)

    
  }


 




}