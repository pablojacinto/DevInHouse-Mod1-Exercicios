alert('Bem-vinda ao exercício!');

function irGit() {
   if (window.confirm('Você realmente quer ir ao GitHub?')) {
      window.open('https://github.com/pablojacinto');
   }
}

//Perguntar o nome e exibir no alert
var nome = prompt('Qual o seu nome?');
alert('Seu nome é: ' + nome);

var sobrenome = prompt('Qual o seu nome?');
alert('Seu sobrenome é: ' + sobrenome);
//Digitar o nome no documento

//Tá parecendo o undefined
// document.getElementById('nomenatela').innerHTML = document.write(nome);

//teste
document.getElementById('nomenatela').innerHTML = 'Seu nome é: ' + nome;

document.getElementById('sobrenome').innerHTML =
   ' e seu sobrenome é: ' + sobrenome;

console.log(nome + ' ' + sobrenome);

// RECEBER VIA FORMULÁRIO https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit

// exibir nome e sobrenome através de entrada de formulário
// function exibirnomecompleto() {
//    document.getElementById('frm1').submit();
// }

// document.getElementById('nome1').innerHTML = fname;

// document.getElementById('sobrenome1').innerHTML = lname;
