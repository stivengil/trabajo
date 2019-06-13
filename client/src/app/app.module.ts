import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Services
import { ConceptosService } from './services/conceptos.service';
import { ConceptoCuentaService } from './services/concepto-cuenta.service';
import { CuentasService } from './services/cuentas.service';
import { EmpresaService } from './services/empresa.service';


import { ConceptoListComponent } from './components/concepto-list/concepto-list.component';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { CuentaListComponent } from './components/cuenta-list/cuenta-list.component';
import { ConceptoCuentaComponent } from './components/concepto-cuenta/concepto-cuenta.component';
import { FiltrocuentaPipe } from './servicefiltro/filtrocuenta.pipe';
import { FiltroempresaPipe } from './servicefiltro/filtroempresa.pipe';
import { FiltconceptoPipe } from './servicefiltro/filtconcepto.pipe';
import { FiltroconceptocuentaPipe } from './servicefiltro/filtroconceptocuenta.pipe';
import { FiltroconceptcuenPipe } from './servicefiltro/filtroconceptcuen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    ConceptoListComponent,

    EmpresaListComponent,

    CuentaListComponent,

    ConceptoCuentaComponent,

    FiltrocuentaPipe,

    FiltroempresaPipe,

   

    FiltconceptoPipe,

    FiltroconceptocuentaPipe,

    FiltroconceptcuenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ConceptosService,
    ConceptoCuentaService,
    CuentasService,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
