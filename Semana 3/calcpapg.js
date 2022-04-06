function calcPA() {
   var v1 = Number(document.getElementById('v1').value);
   var razao = Number(document.getElementById('razao').value);
   var posicao = Number(document.getElementById('posicao').value);

   var pa = '';

   for (var count = 1; count <= posicao; count++) {
      pa += 'Termo ' + count + ' = ' + v1 + '<br />';
      v1 += razao;
   }
   document.getElementById('resultado').innerHTML = pa;
}

//OUTRA FORMA
// let valorInicial = Number(prompt("Digite um valor"));
//  let raiz = Number(prompt("Digite outro valor"));
//  let resultado = [valorInicial];
//  for(i=1; i<= 10; i++) {
//   valorInicial += raiz;
//   resultado.push(valorInicial);
//  }
//  alert(resultado.join("-"));
