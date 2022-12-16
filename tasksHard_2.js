'use strict';

{
  let totalIncome = prompt('Укажите ваш доход');
  let lowTaxRange = 15000;
  let mediumTaxRange = 50000 - lowTaxRange;
  let highTaxRange = +totalIncome - (lowTaxRange + mediumTaxRange);
  let taxValue;

  if (+totalIncome < 15000) {
    lowTaxRange = +totalIncome;
    mediumTaxRange = 0;
    highTaxRange = 0;
  }

  if (+totalIncome < 50000) {
    mediumTaxRange = +totalIncome - lowTaxRange;
    highTaxRange = 0;
  }

  taxValue = lowTaxRange * 0.13 + mediumTaxRange * 0.2 + highTaxRange * 0.3;

  console.log(`Ваш доход: ${+totalIncome}`);
  console.log(`Ваш налог: ${taxValue}`);
}
