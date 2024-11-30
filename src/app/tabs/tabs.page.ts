import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  quetzales: number = 0;
  dolares: number = 0;

  constructor() {}

  convertir() {
    const tasaCambio = 8;
    this.dolares = this.quetzales / tasaCambio;
  }
}
