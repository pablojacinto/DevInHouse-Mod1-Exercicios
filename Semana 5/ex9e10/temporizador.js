// COM SETTIMEOUT////

function mudarCor() {
   let a = document.getElementById('contagem');
   a.style.color = 'red';
}

function temporizador() {
   let a = document.getElementById('contagem');

   a.textContent = 'Começou a contagem';

   window.setTimeout(mudarCor, 1000);
   //não é obrigatório usar o window quando for utilizar os métodos do window
}

// COM SETINTERVAL ////

///set interval muda para que execute repetidamente a função do primeiro argumento

//função a ser chamada de modo assíncrono
function iniciarContagem() {
   let a = document.getElementById('contagem');
   a.style.color = 'red';

   a.innerHTML += 'Passaram-se dois segundos' + '<br>';
}

function limparTexto() {
   document.getElementById('contagem').innerHTML = '';
}

//criação do temporizador para chamar aquela função
var intervalo;

function temporizadorIntervalo() {
   let a = document.getElementById('contagem');

   a.textContent = 'Começou a contagem';

   window.setTimeout(limparTexto, 1980);

   intervalo = window.setInterval(iniciarContagem, 2000);
   //não é obrigatório usar o window quando for utilizar os métodos do window
}

//botão de parar
function pararContagem() {
   clearInterval(intervalo);
}

///ADICIONAR HORÁRIO

// let formatHorario = new Date().toTimeString().split(' ')[0]; FUNÇÃO PARA ADICIONAR HORÁRIO

function incluiHorario() {
   let a = document.getElementById('contagem');
   a.innerHTML += new Date().toTimeString().split(' ')[0] + '<BR>';
}

function contaHorario() {
   let a = document.getElementById('contagem');
   const informaContagem = Number(
      document.getElementById('informaContagem').value
   );
   a.textContent = 'Começou a contagem';

   window.setTimeout(limparTexto, informaContagem * 1000 - 50);

   intervalo = window.setInterval(incluiHorario, informaContagem * 1000);
   //não é obrigatório usar o window quando for utilizar os métodos do window
}
