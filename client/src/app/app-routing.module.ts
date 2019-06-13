import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptoListComponent } from './components/concepto-list/concepto-list.component';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { CuentaListComponent } from './components/cuenta-list/cuenta-list.component';
import { ConceptoCuentaComponent } from './components/concepto-cuenta/concepto-cuenta.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'concepto',
    pathMatch: 'full'
  },
  {
    path: 'concepto',
    component: ConceptoListComponent
  },
  {
    path: 'empresa',
    component: EmpresaListComponent
  },
  {
    path: 'cuentas',
    component: CuentaListComponent
  },
  {
    path: 'concepto-cuenta',
    component: ConceptoCuentaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
