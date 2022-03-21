function confirmaidade() {
   var idade = prompt('Qual a sua idade?');

   if (idade < 18) {
      alert('Você é menor de idade');
   } else if (18 <= idade && idade <= 64) {
      alert('Você é adulto');
   } else {
      alert('Você é um idoso');
   }
}
