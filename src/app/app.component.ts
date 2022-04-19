import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lista: string[] = ['carlos', 'joao', 'maria', 'bruno', 'pedro'];

  textoqualquer: string = 'Um texto qualquer';

  data: Date = new Date();

  valor: number = 12.13;

  urlimage: string =
    'https://static8.depositphotos.com/1003924/886/i/600/depositphotos_8868243-stock-photo-spectrum-multicolored-eye-macro.jpg';

  isSpecial: boolean = true;

  onKeyUp(event) {
    console.log(event.target.value);
  }

  getValor(): number {
    return 5;
  }

  getclassname(): string {
    return 'alert-warning';
  }
}
