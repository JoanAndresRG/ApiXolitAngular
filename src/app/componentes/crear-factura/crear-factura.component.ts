import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloFactura } from 'src/app/modelos/factura.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  titularAlerta: string = ' ';
  fgValidador: FormGroup = this.fb.group({
    'nombresCliente': ['', [Validators.required]],
    'apellidosCliente': ['', [Validators.required]],
    'numeroIdentificacion': ['', [Validators.required]],
    'fechaDeVenta': ['', [Validators.required]],
    'totalPrecioVenta': ['', [Validators.required]],
    'subtotalSinIva': ['', [Validators.required]],
    'direcionEnvio': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'fechaDeEntrega': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioFactura: AdministracionService,
    private router: Router) { }

  ngOnInit(): void {

  }

  GuardarFactura() {
    let nombresCliente = this.fgValidador.controls["nombresCliente"].value;
    let apellidosCliente = this.fgValidador.controls["apellidosCliente"].value;
    let numeroIdentificacion = this.fgValidador.controls["numeroIdentificacion"].value;
    let fechaDeVenta = this.fgValidador.controls["fechaDeVenta"].value;
    let totalPrecioVenta = parseInt(this.fgValidador.controls["totalPrecioVenta"].value);
    let subtotalSinIva = parseInt(this.fgValidador.controls["subtotalSinIva"].value);
    let direcionEnvio = this.fgValidador.controls["direcionEnvio"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let fechaDeEntrega = this.fgValidador.controls["fechaDeEntrega"].value;
    let e = new ModeloFactura();
    e.NombreCliente = nombresCliente;
    e.ApellidosCliente = apellidosCliente;
    e.NumeroIdentificacion = numeroIdentificacion;
    e.FechaDeVenta = fechaDeVenta;
    e.TotalPrecioVenta = totalPrecioVenta;
    e.SubtotalSinIVA = subtotalSinIva;
    e.DireccionEnvio = direcionEnvio;
    e.Telefono = telefono;
    e.FechaDeEntrega = fechaDeEntrega;
    this.servicioFactura.CrearFactura(e).subscribe({next: (datos: ModeloFactura) => {
        swal.fire("Factura","Creada correctamente","success");
        this.router.navigate(["/administracion/CrearDetalleFactura"]);
      }, error: (error: any) => {
        swal.fire("Error","Al ingresar datos de la factura","error");
      }
    })
  }
}