

import { Divisa } from './../models/divisa';
import { TokenService } from './../service/token.service';
import { CambioService } from './../service/cambio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-conversion',
  templateUrl: './tabla-conversion.component.html',
  styleUrls: ['./tabla-conversion.component.css']
})
export class TablaConversionComponent implements OnInit {

  divisas: Divisa[] = [];
  isAdmin = false;

  constructor(
    private cambioService: CambioService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.isAdmin = this.tokenService.IsAdmin();
  }

  cargarProductos(): void {
    this.cambioService.listarDivisas().subscribe(
      data => {
        this.divisas = data;
      },
      err => {
        console.log(err);
      }
    );
  }



}
