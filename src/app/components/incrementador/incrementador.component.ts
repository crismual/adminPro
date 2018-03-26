import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'LEYENDA';
  @Input() porcentaje: number = 50;

  constructor() {

  }

  ngOnInit() {
    console.log('leyenda', this.leyenda);
    console.log('leyenda', this.porcentaje);
  }
  cambiarValor( valor: number) {
    this.porcentaje = this.porcentaje + valor;
    if ( this.porcentaje >= 100) {
    this.porcentaje = 100;
    return;
    }
    if ( this.porcentaje <= 0) {
    this.porcentaje = 0;
    return;
    }
    }
}