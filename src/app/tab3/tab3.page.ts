import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  quetzales: number = 0;
  yenes: number = 0;

  constructor() {}

  convertir() {
    const tasaCambio = 0.051;
    this.yenes = Number((this.quetzales / tasaCambio).toFixed(2));
  }
}
