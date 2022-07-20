export class Divisa {

    id?: number;
    monedaOrigen: string;
    monedaDestino: string;
    tipoCambio?: number;


    constructor(monedaOrigen: string,
         monedaDestino: string, tipoCambio: number ) {
            
            this.monedaOrigen = monedaOrigen;
            this.monedaDestino = monedaDestino;
            this.tipoCambio = tipoCambio;
         }

}
