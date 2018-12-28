import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

	readonly dados = [
        ['Janeiro', 37],
        ['Fevereiro', 68],
        ['Março', 49],
        ['Abril', 10],
        ['Maio', 81],
        ['Junho', 22]
    ]

	constructor() {}

	obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}

}
