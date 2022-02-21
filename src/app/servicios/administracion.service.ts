import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloFactura } from '../modelos/factura.modelo';
import { ModeloProducto } from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  url = 'https://localhost:44316';
  constructor(private http: HttpClient) { }

  ObtenerProductos(): Observable<any> {
    return this.http.get(`${this.url}/api/Producto/ObtenerProductos`);
  }

  ObtenerProductos2(): Observable<ModeloProducto[]> {
    return this.http.get<ModeloProducto[]>(`${this.url}/api/Producto/ObtenerProductos`);
  }

  CrearFactura(factura: ModeloFactura): Observable<any> {
    return this.http.post<ModeloFactura>(`${this.url}/api/CrearFactura`, factura);
  }
}
