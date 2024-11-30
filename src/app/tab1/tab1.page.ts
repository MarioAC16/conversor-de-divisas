import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  quetzales: number = 0;
  dolares: number = 0;

  constructor() {}

  convertir() {
    const tasaCambio = 8;
    this.dolares = Number((this.quetzales / tasaCambio).toFixed(2));
  }
}

