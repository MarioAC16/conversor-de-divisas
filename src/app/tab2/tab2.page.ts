import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  quetzales: number = 0;
  pesos: number = 0;

  constructor() {}

  convertir() {
    const tasaCambio = 0.38;
    this.pesos = Number((this.quetzales / tasaCambio).toFixed(2)); 
  }

}
