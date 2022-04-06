// let titulo = document.getElementsByTagName('h1');

function alteraTitulo() {
   let novoTitulo = document.getElementById('novoTitulo').value;

   document.getElementById('tituloNovo').innerHTML = novoTitulo;
   //    document.getElementsByTagName('h1').textContent = novoTitulo;
   //parece que eu precisaria indicar a posição da array
   //    document.getElementsByTagName('h1')[0].textContent = novoTitulo
}

//Calculadora

function calcular() {
   //selecionar valor do menu dropdown
   let selectOperator = document.getElementById('operacao');
   let selectedOperator =
      selectOperator.options[selectOperator.selectedIndex].value;

   //selecionar valores dos inputs
   let n1 = Number(document.getElementById('n1').value);

   let n2 = Number(document.getElementById('n2').value);

   //criar variável resultado
   let resultado = '';

   //criar switch de cálculos

   switch (selectedOperator) {
      case '+':
         resultado = n1 + n2;
         break;

      case '-':
         resultado = n1 - n2;
         break;

      case '*':
         resultado = n1 * n2;
         break;
      case '/':
         resultado = n1 / n2;
         break;
   }

   //imprimindo resultado no documento
   document.getElementById('result').textContent = resultado;
}
