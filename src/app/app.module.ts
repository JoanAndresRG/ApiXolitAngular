import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './componentes/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    ProductoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
