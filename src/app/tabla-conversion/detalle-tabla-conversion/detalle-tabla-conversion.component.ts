import { CambioService } from './../../service/cambio.service';
import { Divisa } from './../../models/divisa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-tabla-conversion',
  templateUrl: './detalle-tabla-conversion.component.html',
  styleUrls: ['./detalle-tabla-conversion.component.css']
})
export class DetalleTablaConversionComponent implements OnInit {

  divisa: any = null;

  constructor(
    private cambioService: CambioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cambioService.obtenerDivisaPorId(id).subscribe(
      data => {
        this.divisa = data;
      },
      err => {
        console.log(err.error.mensaje);
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/tablaConversion']);
  }
}
