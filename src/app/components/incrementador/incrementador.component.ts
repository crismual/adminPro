import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'LEYENDA';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter;

  constructor() {

  }

  ngOnInit() {
    console.log('leyenda', this.leyenda);
    console.log('leyenda', this.porcentaje);
  }
  onChange(newValue: number) {


    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor( valor: number) {
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
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
