import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  productos : ModeloProducto[] = [];
  constructor(private administracion: AdministracionService) { }

  ngOnInit(): void {
    this.ObtenerProductos();
  }


  ObtenerProductos() {
    this.administracion.ObtenerProductos().subscribe(result => {
      this.productos = result
    })
  }
}
