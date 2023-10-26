import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class ImcPage {
  personWeight: number | null;
  personHeight: number | null;
  heightInMeters: number | null;
  IMC: number | null;
  classification: string;
  result: boolean;
  classificationClass: string;

  constructor() {
    this.personWeight = null;
    this.personHeight = null;
    this.heightInMeters = null;
    this.IMC = null;
    this.classification = "";
    this.result = false;
    this.classificationClass = "";
  }

  // Função para validar e filtrar a entrada de altura
validarAlturaInput(event: any) {
  const inputValue = event.target.value;

  // Remova quaisquer caracteres que não sejam dígitos
  const numericValue = inputValue.replace(/[^0-9]/g, '');

  // Converter o valor para um número inteiro
  this.personHeight = parseInt(numericValue, 10);

  // Se o valor não for um número inteiro válido, definir a altura como nula
  if (isNaN(this.personHeight)) {
    this.personHeight = null;
  }
}

  calcularIMC() {
    this.heightInMeters! = this.personHeight! / 100;
    this.IMC = this.personWeight! / (this.heightInMeters! * this.heightInMeters!);

    if (this.IMC >= 40) {
      this.classification = "Obesidade Grau III";
      this.classificationClass = "obesidade";
    } else if (this.IMC >= 35) {
      this.classification = "Obesidade Grau II";
      this.classificationClass = "acima-do-peso";
    } else if (this.IMC >= 30) {
      this.classification = "Obesidade Grau I";
      this.classificationClass = "acima-do-peso";
    } else if (this.IMC >= 25) {
      this.classification = "Acima do Peso";
      this.classificationClass = "acima-do-peso";
    } else if (this.IMC >= 18.5) {
      this.classification = "Peso Normal";
      this.classificationClass = "peso-normal";
    } else if (this.IMC >= 17) {
      this.classification = "Abaixo do Peso";
      this.classificationClass = "abaixo-do-peso";
    } else if (this.IMC < 16.9) {
      this.classification = "Muito Abaixo do Peso";
      this.classificationClass = "muito-abaixo-do-peso";
    } else {
      this.classification = "";
      this.classificationClass = "";
    }

    this.result = true;
  }
}