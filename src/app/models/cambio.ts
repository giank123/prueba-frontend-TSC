export class Cambio {

    id?: number;
    montoOrigen: BigInteger;
    monedaOrigen: string;
    monedaDestino: string;

    tipoCambio?: BigInteger;
    montoDestino?: BigInteger;


    constructor( montoOrigen: BigInteger,
        monedaOrigen: string, monedaDestino: string ) {

        this.montoOrigen = montoOrigen;
        this.monedaOrigen = monedaOrigen;
        this.monedaDestino = monedaDestino;
        
      }
}
