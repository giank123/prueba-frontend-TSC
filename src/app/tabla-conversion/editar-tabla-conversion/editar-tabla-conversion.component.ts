import { ActivatedRoute, Router } from '@angular/router';
import { CambioService } from './../../service/cambio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-tabla-conversion',
  templateUrl: './editar-tabla-conversion.component.html',
  styleUrls: ['./editar-tabla-conversion.component.css']
})
export class EditarTablaConversionComponent implements OnInit {

  divisa: any = null;

  constructor(
    private divisaService: CambioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.divisaService.obtenerDivisaPorId(id).subscribe(
      data => {
        this.divisa = data;
      },
      err => {
        console.log(err.error.mensaje);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.divisaService.updateCurrency(this.divisa).subscribe(
      data => {
        console.log('Producto Actualizado');
        this.router.navigate(['/tablaConversion']);
      },
      err => {
        console.log(err.error.mensaje);
      }
    );
  }

}
