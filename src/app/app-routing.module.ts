import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CrearFacturaComponent } from './componentes/crear-factura/crear-factura.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"administracion",
    component: CrearFacturaComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
