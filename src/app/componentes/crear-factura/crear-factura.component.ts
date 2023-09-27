import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl ,Validators } from '@angular/forms';
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
    'apellidoCliente': ['', [Validators.required]],
    'numeroIdentificacion': ['', [Validators.required]],
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
    console.log('test-create-factura');
    
    let nombresCliente = this.fgValidador.controls["nombresCliente"].value;
    let apellidoCliente = this.fgValidador.controls["apellidoCliente"].value;
    let numeroIdentificacion = this.fgValidador.controls["numeroIdentificacion"].value;
    let totalPrecioVenta = parseInt(this.fgValidador.controls["totalPrecioVenta"].value);
    let subtotalSinIva = parseInt(this.fgValidador.controls["subtotalSinIva"].value);
    let direcionEnvio = this.fgValidador.controls["direcionEnvio"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let fechaDeEntrega = this.fgValidador.controls["fechaDeEntrega"].value;
    let e = new ModeloFactura();
    e.NombreCliente = nombresCliente;
    e.ApellidoCliente = apellidoCliente;
    e.NumeroIdentificacion = numeroIdentificacion;
    e.TotalPrecioVenta = totalPrecioVenta;
    e.SubtotalSinIVA = subtotalSinIva;
    e.DireccionEnvio = direcionEnvio;
    e.Telefono = telefono;
    e.FechaDeEntrega = fechaDeEntrega;
    this.servicioFactura.CrearFactura(e).subscribe({next: (datos: ModeloFactura) => {
        swal.fire("Factura","Creada correctamente","success");
        this.router.navigate(["/administracion"]);
      }, error: (error: any) => {
        swal.fire("Error","Al ingresar datos de la factura","error");
      }
    })
  }
}