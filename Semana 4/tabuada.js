function tabuada2() {
   document.getElementById('resultadotabuada').innerHTML = '';
   let ntabuada = document.getElementById('ntabuada').value;

   console.log(ntabuada);
   for (let i = 0; i <= 10; i++) {
      document.getElementById('resultadotabuada').innerHTML +=
         ntabuada + ' X ' + i + ' = ' + ntabuada * i + '<br>';
   }
}
