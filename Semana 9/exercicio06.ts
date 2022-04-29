/*

Depois da construção das classes e métodos, deposite 3500 reais chamando a função deposito(), sabendo que o limite máximo é 1000 antes de confirmar a soma e verifique se o valor recebido é menor ou igual a 1000. Depois disso chame a função imprimeValorConta() e imprima o valor total, ou seja, 3500.
*/

class Conta {
   protected numero: number;
   protected saldo: number;
   protected estaAtiva: boolean;
   protected dono: string;

   constructor(
      numero: number,
      saldo: number,
      estaAtiva: boolean,
      dono: string
   ) {
      this.numero = numero;
      this.saldo = saldo;
      this.estaAtiva = estaAtiva;
      this.dono = dono;
   }
}

class contaEmpresa extends Conta {
   private limiteDeDeposito: number = 1000;

   constructor(
      numero: number,
      saldo: number,
      estaAtiva: boolean,
      dono: string
   ) {
      super(numero, saldo, estaAtiva, dono);
   }

   deposito(valor: number) {
      if (valor <= this.limiteDeDeposito) {
         this.saldo += valor;
      } else {
         console.log('Depósito acima do limite');
      }
   }

   imprimeValorConta() {
      console.log(this.saldo);
   }
}

let conta1 = new contaEmpresa(1, 0, true, 'Pablo');

conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(500);
conta1.imprimeValorConta();
conta1.deposito(5500);
conta1.imprimeValorConta();
