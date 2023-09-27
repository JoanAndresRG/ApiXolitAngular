import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloFactura } from '../modelos/factura.modelo';
import { ModeloProducto } from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  url = 'https://localhost:5001';
  constructor(private http: HttpClient) { }

  ObtenerProductos(): Observable<ModeloProducto[]> {
    return this.http.get<ModeloProducto[]>(`${this.url}/api/Producto/ObtenerProductos`);
  }

  CrearFactura(factura: ModeloFactura): Observable<any> {
    return this.http.post<ModeloFactura>(`${this.url}/api/Factura/CrearFactura`, factura);
  }
}
