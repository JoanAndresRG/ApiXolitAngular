import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos: ModeloProducto[] = [];
  constructor(
    private administracion: AdministracionService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.ObtenerProductos();
  }

  ObtenerProductos() {
    this.administracion.ObtenerProductos().subscribe(result => {
      this.productos = result;
    })
  }

  RedirectAdmin(){
    console.log('test-enter');
    
    this.router.navigate(["/administracion"]);
  }

}
