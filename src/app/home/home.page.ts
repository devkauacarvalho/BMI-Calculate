import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class BmiPage {
  personWeight: number;
  personHeight: number;
  heightInMeters: number;
  BMI: number;
  classification: string;
  classificationCSS: string;
  nullWeightErrorMessage: string;
  nullHeightErrorMessage: string;
  completeResult: boolean;

  constructor() {
    this.personWeight = 0;
    this.personHeight = 0;
    this.heightInMeters = 0;
    this.BMI = 0;
    this.classification = "";
    this.classificationCSS = "";
    this.nullWeightErrorMessage = "";
    this.nullHeightErrorMessage = "";
    this.completeResult = false;
  }

  // Função para validar e filtrar a entrada de altura
heightInputValidate(event: any) {
  const heightInputValue = event.target.value;

  // Remova quaisquer caracteres que não sejam dígitos
  const heightNumericValue = heightInputValue.replace(/[^0-9]/g, '');

  // Converter o valor para um número inteiro
  this.personHeight = parseInt(heightNumericValue, 10);
}

  bmiCalculate() {
    this.heightInMeters! = this.personHeight! / 100;
    this.BMI = this.personWeight! / (this.heightInMeters! * this.heightInMeters!);

    if (this.BMI >= 40) {
      this.classification = "Class III Obesity";
      this.classificationCSS = "ObesityStyle";
    } else if (this.BMI >= 35) {
      this.classification = "Class II Obesity";
      this.classificationCSS = "ObesityStyle";
    } else if (this.BMI >= 30) {
      this.classification = "Class I Obesity";
      this.classificationCSS = "OverweightStyle";
    } else if (this.BMI >= 25) {
      this.classification = "Overweight";
      this.classificationCSS = "OverweightStyle";
    } else if (this.BMI >= 18.5) {
      this.classification = "Normal Weight";
      this.classificationCSS = "NormalWeightStyle";
    } else if (this.BMI >= 17) {
      this.classification = "Underweight";
      this.classificationCSS = "UnderWeightStyle";
    } else if (this.BMI < 16.9) {
      this.classification = "Very Underweight";
      this.classificationCSS = "VeryUnderWeightStyle";
    } else {
      this.classification = "";
      this.classificationCSS = "";
    }

    this.completeResult = true;
  }
}