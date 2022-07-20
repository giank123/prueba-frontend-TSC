import { Divisa } from './../../models/divisa';
import { Router } from '@angular/router';
import { CambioService } from './../../service/cambio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva-tabla-conversion',
  templateUrl: './nueva-tabla-conversion.component.html',
  styleUrls: ['./nueva-tabla-conversion.component.css']
})
export class NuevaTablaConversionComponent implements OnInit {

  monedaOrigen = '';
  monedaDestino = '';
  tipoCambio: any = null;

  constructor(
    private cambioService: CambioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const divisa = new Divisa(this.monedaOrigen, this.monedaDestino, this.tipoCambio);

    this.cambioService.registrarDivisa(divisa).subscribe(
      data => {
        console.log('Divisa Creado');
        this.router.navigate(['/tablaConversion']);
      },
      err => {
        console.log(err.error.mensaje);        
      }
    );
  }

}
