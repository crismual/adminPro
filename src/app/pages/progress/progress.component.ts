import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentajeUno: number = 20;
  porcentajeDos: number = 50;


  ngOnInit() {
  }


}
