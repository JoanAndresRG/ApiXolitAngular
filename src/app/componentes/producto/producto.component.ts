import { Component, Input, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() productoEntrada: ModeloProducto = {};
  nombre: string = '';
  cantidad: number = 0;
  valorTotal: number = 0;
  productoHtml: ModeloProducto = {};

  constructor(private administracion: AdministracionService) { }

  ngOnInit(): void {
    this.pintarEntrada();
  }


  pintarEntrada() {
    console.log(this.productoEntrada, ' PRUEBA JAGA');
    this.nombre = this.productoEntrada.Nombre;
    this.cantidad = this.productoEntrada.CantidadUnidadesInventario;
    this.valorTotal = this.productoEntrada.ValorVentaConIva;

    this.productoHtml = this.productoEntrada;

  }




}
