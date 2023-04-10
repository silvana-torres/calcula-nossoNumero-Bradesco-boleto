import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createFormGroup();
  }

  private createFormGroup() {
    this.form = this.fb.group({
      carteira: [''],
      nossoNumero: [''],
      digito: [''],
    });
  }

  public onClick() {
    this.calculaNossoNumero();
  }
  public calculaNossoNumero() {
    const nossoNumero = this.form.value.nossoNumero;
    const carteira = this.form.value.carteira;

    const posicao1C = carteira.substr(0, 1) * 2;
    const posicao2C = carteira.substr(1, 1) * 7;

    const posicao1N = nossoNumero.substr(0, 1) * 6;
    const posicao2N = nossoNumero.substr(1, 1) * 5;
    const posicao3N = nossoNumero.substr(2, 1) * 4;
    const posicao4N = nossoNumero.substr(3, 1) * 3;
    const posicao5N = nossoNumero.substr(4, 1) * 2;
    const posicao6N = nossoNumero.substr(5, 1) * 7;
    const posicao7N = nossoNumero.substr(6, 1) * 6;
    const posicao8N = nossoNumero.substr(7, 1) * 5;
    const posicao9N = nossoNumero.substr(8, 1) * 4;
    const posicao10N = nossoNumero.substr(9, 1) * 3;
    const posicao11N = nossoNumero.substr(10, 1) * 2;

    const soma =
      posicao1C +
      posicao2C +
      posicao1N +
      posicao2N +
      posicao3N +
      posicao4N +
      posicao5N +
      posicao6N +
      posicao7N +
      posicao8N +
      posicao9N +
      posicao10N +
      posicao11N;

    console.log('soma', soma);

    const modulo = soma % 11;

    console.log('modulo', modulo);
    let digito = '';

    if (modulo == 1) {
      digito = 'P';
    } else if (modulo == 0) {
      digito = '0';
    } else {
      digito = (11 - modulo).toString();
    }
  }

  ngOnInit(): void {}
}
