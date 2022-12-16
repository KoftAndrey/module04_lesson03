'use strict';

{
  let totalIncome = prompt('Укажите ваш доход');
  let taxRate = 0.3;
 
  if (+totalIncome < 15000) {
    taxRate = 0.13;
  }

  if (+totalIncome < 50000) {
    taxRate = 0.2;
  }

  console.log(`Ваш доход: ${+totalIncome}`);
  console.log(`Ваш налог: ${+totalIncome * taxRate}`);
}
