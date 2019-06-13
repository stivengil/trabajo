import { ConceptoCuentaService } from './../../services/concepto-cuenta.service';
import { ConceptoCuenta } from './../../models/Concepto-cuenta';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-concepto-cuenta',
  templateUrl: './concepto-cuenta.component.html',
  styleUrls: ['./concepto-cuenta.component.css']
})
export class ConceptoCuentaComponent implements OnInit {


  @HostBinding('class') classes = 'row';
  conceptocuenta: ConceptoCuenta = {
  
    id_conceptocuentas: 0,
    id_emp: "",
    id_concepto: 0,
    id_cuenta: ""  

};



  edit: boolean = false;

  constructor( private conceptocuentaservice : ConceptoCuentaService, private router: Router, private  activedRoute: ActivatedRoute) { }


  filterConceptocuenta ='';
  conceptocuentas: any = [];




  ngOnInit() {
    this.getconceptoCuenta();
    
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
    
    this.conceptocuentaservice.getConceptoCuentas()
      .subscribe(
        res => {
          this.conceptocuentas = res;
          
          console.log(res);

        },
        err => console.error(err)
      );
  }

  deleteconceptocuenta(id: string) {
    this.conceptocuentaservice.deleteConceptoCuenta(id)
      .subscribe(
        res => {
          console.log(res);
          this.getconceptoCuenta();
        },
        err => console.error(err)
      )
  }

 

  
  saveNewConceptocuenta(){
    delete this.conceptocuenta.id_conceptocuentas;


    this.conceptocuentaservice.saveConceptoCuenta(this.conceptocuenta)
    .subscribe(
      res => {
      console.log(res);

      this.getconceptoCuenta();
      this.router.navigate(['/concepto-cuenta']);
      },
      err => console.error(err)
    )
  }
  

  updateConceptocuenta(conceptocuenta){
  
  
    console.log(conceptocuenta)
    this.conceptocuentaservice.updateConceptoCuenta(conceptocuenta.id_conceptocuentas,conceptocuenta)
    .subscribe(
      res =>{
        console.log(res);
        this.conceptocuenta = conceptocuenta
          console.log(conceptocuenta)
      
        this.getconceptoCuenta();
        
        this.router.navigate(['/concepto-cuenta']);
      },
      err => console.error(err)
    )
    
  }

  viewModal(conceptocuenta){
    console.log(conceptocuenta)
    this.conceptocuenta = conceptocuenta
    
  }


 




}