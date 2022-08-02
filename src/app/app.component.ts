import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mostrar = false;

  tablaSueldos: {nombre: string, monto: number}[] = [
    {nombre: 'Juan', monto: 10412},
    {nombre: 'Pedro', monto: 5223},
    {nombre: 'Maria', monto: 8335},
  ];

  showData() {
    return (this.mostrar = true);
  }

  hideData() {
    return (this.mostrar = false);
  }

}
