import { Observable } from 'rxjs';
import { Cambio } from '../models/cambio';
import { Divisa } from '../models/divisa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: "root"
})
export class CambioService {
  cambioURL = environment.cambioURL;

  constructor(private httpClient: HttpClient) {}

  /*
  public listarTipoMoneda():Observable<TipoMoneda[]> {
    return this.httpClient.get<TipoMoneda[]>(this.rutaBase + "/divisa");
  }*/

  public listarDivisas(): Observable<Divisa[]> {
    return this.httpClient.get<Divisa[]>(this.cambioURL + 'divisa');
  }

  public obtenerDivisaPorId(id: number): Observable<Divisa> {
    return this.httpClient.get<Divisa>(this.cambioURL + `divisa/${id}`);
  }

  public registrarDivisa(divisa: Divisa): Observable<Divisa>  {
    return this.httpClient.post<Divisa>( this.cambioURL + 'divisa', divisa);
  }

  public registrarCambio(cambio: Cambio) {
    return this.httpClient.post<Cambio>( this.cambioURL + "cambio", cambio);
  }

  public updateCurrency(divisa: Divisa) {
    return this.httpClient.put<Divisa>( this.cambioURL + "update/divisa", divisa);
  }


}