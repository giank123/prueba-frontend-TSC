import { NuevaTablaConversionComponent } from './tabla-conversion/nueva-tabla-conversion/nueva-tabla-conversion.component';
import { EditarTablaConversionComponent } from './tabla-conversion/editar-tabla-conversion/editar-tabla-conversion.component';
import { DetalleTablaConversionComponent } from './tabla-conversion/detalle-tabla-conversion/detalle-tabla-conversion.component';
import { LoginGuard } from './guard/login.guard';
import { CambioComponent } from './cambio/cambio.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaConversionComponent } from './tabla-conversion/tabla-conversion.component';
import { CambioGuardService} from './guard/cambio-guard.service';


const routes: Routes = [

  {path: '', component: IndexComponent  },
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]  },
  {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'cambio/:id', component: CambioComponent },
  { path: 'tablaConversion', component: TablaConversionComponent, canActivate: [CambioGuardService], data: { expectedRol: ['admin', 'user'] }},
  { path: 'divisa/:id', component: DetalleTablaConversionComponent, canActivate: [CambioGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nueva-tablaConversion', component: NuevaTablaConversionComponent, canActivate: [CambioGuardService], data: { expectedRol: ['admin'] } },
  { path: 'editar-tablaConversion/:id', component: EditarTablaConversionComponent, canActivate: [CambioGuardService], data: { expectedRol: ['admin'] } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
