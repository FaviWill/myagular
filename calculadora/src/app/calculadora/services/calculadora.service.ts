import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DISISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
}
