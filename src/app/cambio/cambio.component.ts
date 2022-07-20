import { Divisa } from './../models/divisa';
import { Cambio } from './../models/cambio';
import { Router, ActivatedRoute } from '@angular/router';
import { CambioService } from './../service/cambio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent implements OnInit {

  divisa: any = null;
  id: any = null;

  montoOrigen: any = null;
  monedaOrigen = '';
  monedaDestino = '';
  
  tipoCambio: any = null;
  montoDestino: any = null;



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
        this.fromDivisaToCambio(this.divisa);
      },
      err => {
        console.log(err.error.mensaje);
       // this.volver();
      }
    );
  }

  onCreate(): void {
    const cambio = new Cambio(this.montoOrigen, this.monedaOrigen,this.monedaDestino);

    this.cambioService.registrarCambio(cambio).subscribe(
      data => {
        console.log('Cambio Creado');
        this.montoDestino = data.montoDestino;
      },
      err => {
        console.log(err.error.mensaje);        
      }
    );
  }


  volver(): void {
    this.router.navigate(['/tablaConversion']);
  }

  fromDivisaToCambio(divisa: Divisa): void{
    this.id = divisa.id;
    this.monedaOrigen = divisa.monedaOrigen;
    this.monedaDestino = divisa.monedaDestino;
    this.tipoCambio = divisa.tipoCambio;



  }

}
