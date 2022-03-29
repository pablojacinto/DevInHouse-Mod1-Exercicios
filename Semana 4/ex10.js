contasClientes = [
   {
      id: 1,
      saldo: 500,
   },
   {
      id: 2,
      saldo: 30000,
   },
   {
      id: 3,
      saldo: 50,
   },
];

document.getElementById(`saldo1`).innerHTML = contasClientes[0].saldo;
document.getElementById(`saldo2`).innerHTML = contasClientes[1].saldo;
document.getElementById(`saldo3`).innerHTML = contasClientes[2].saldo;

//Interação com o DOM

function sacar(id, valor) {
   if (contasClientes[id - 1].saldo - valor < 0) {
      window.alert('Você não pode sacar este valor');
      window.alert(
         'Seu saldo atual é ' + contasClientes[id - 1].saldo + ' reais'
      );
   } else {
      contasClientes[id - 1].saldo -= valor;
      window.alert('Valor Sacado');
      window.alert('Seu saldo agora é: ' + contasClientes[id - 1].saldo);
   }
}

function depositar(id, valor) {
   contasClientes[id - 1].saldo += valor;
   window.alert('Valor depositado');
   window.alert('Seu saldo agora é: ' + contasClientes[id - 1].saldo);
}

//OPERAÇÃO

function operacao() {
   let id = Number(document.getElementById('iddaconta').value);
   let valorsaque = Number(document.getElementById('valordesaque').value);
   let valordeposito = Number(document.getElementById('valordeposito').value);
   //

   //teste

   if (valorsaque != 0 && valordeposito == 0) {
      sacar(id, valorsaque);
      document.getElementById(`saldo${id}`).innerHTML =
         contasClientes[id - 1].saldo;
   } else if (valordeposito != 0 && valorsaque == 0) {
      depositar(id, valordeposito);
      document.getElementById(`saldo${id}`).innerHTML =
         contasClientes[id - 1].saldo;
   } else {
      alert('Escolha apenas uma operação');
   }
}
