import { FooterComponent } from './footer/footer.component';
import { NuevaTablaConversionComponent } from './tabla-conversion/nueva-tabla-conversion/nueva-tabla-conversion.component';
import { EditarTablaConversionComponent } from './tabla-conversion/editar-tabla-conversion/editar-tabla-conversion.component';
import { DetalleTablaConversionComponent } from './tabla-conversion/detalle-tabla-conversion/detalle-tabla-conversion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TablaConversionComponent } from './tabla-conversion/tabla-conversion.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CambioComponent } from './cambio/cambio.component';
import { AddTipoMonedaComponent } from './add-tipoMoneda/add-tipo-moneda.component';
import { interceptorProvider } from './interceptors/prod-interceptors.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    AddTipoMonedaComponent,
    TablaConversionComponent,
    CambioComponent,
    DetalleTablaConversionComponent,
    EditarTablaConversionComponent,
    NuevaTablaConversionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [interceptorProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
