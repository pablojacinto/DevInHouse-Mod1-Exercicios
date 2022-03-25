let impares = 0;
let contador = 0;

while (impares < 10) {
   console.log('contador ' + contador);
   contador++;

   // impares++;
   if ((impares + 2) % 2 !== 0) {
      console.log('número Ímpar ' + impares);
      impares++;
   }
}

console.log('Fim do script');
