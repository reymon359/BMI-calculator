// IMC calculator
// Author: Ramon Morcillo @reymon359

function calculateImc() {
  let imcBar = document.getElementById('IMCbar');
  this.imc = this.user.weightActual / ((this.user.height / 100) * (this.user.height / 100));
  if (this.imc <= 18.5) {
    this.imcText = 'Bajo Peso';
  } else if (this.imc > 18.5 && this.imc <= 25) {
    this.imcText = 'Peso Normal';
  } else if (this.imc > 25 && this.imc <= 30) {
    this.imcText = 'Sobrepeso';
  } else if (this.imc > 30 && this.imc <= 35) {
    this.imcText = 'Obesidad Nivel 1';
  } else if (this.imc > 35 && this.imc <= 40) {
    this.imcText = 'Obesidad Nivel 2';
  } else if (this.imc > 40 && this.imc <= 50) {
    this.imcText = 'Obesidad Nivel 3';
  } else if (this.imc > 50) {
    this.imcText = 'Obesidad Nivel 4';
  }
  if (this.imc <= 15) {
    imcBar.style.width = '0%';
  } else if (this.imc >= 50) { // si es 50 o mayor es 100%
    imcBar.style.width = '100%';
  } else { // If IMC wis between 15 and 50
    imcBar.style.width = (((this.imc - 15) * 100) / 35) + '%';
  }
}
