class Pedidos {
   constructor(num) {
      this.numeroPedido = num;
      this.dataPedido = new Date().toLocaleDateString();
      this.estaPago = false;
      this.listaProdutos = [];
      this.totalaPagar = 0;
   }

   //EX5//método para adicionar produto na array de lista
   adicionarProduto(produtoAdicionado, preco) {
      this.listaProdutos.push({ produtoAdicionado, preco });
   }

   calcularTotal() {
      this.listaProdutos.forEach((elemento, i) => {
         return (this.totalaPagar += elemento.preco);
      });
   }
}

//teste de instanciamento de produto

let produto1 = new Pedidos(1);
produto1.adicionarProduto('carro', 2200);
console.log(produto1);

console.log('teste com o pedido 2');

let produto2 = new Pedidos(2);
produto2.adicionarProduto('Casa', 500);
produto2.adicionarProduto('Mesa', 200);
produto2.calcularTotal();
console.log('o total a pagar é = ' + produto2.totalaPagar);

///MANEIRA 1 DE CALCULAR SOMA DE ELEMENTOS DE OBJETO EM ARRAY
console.log('calculando soma de elementos de array forma 1');
//tentar calcular aqui por fora primeiro
const arraydeValores = produto2.listaProdutos.map((item) => item.preco); //aqui o map transformou em um array apenas com os valores de item.preco

const somatotal = arraydeValores.reduce((prev, curr) => prev + curr, 0); //função reduce() pega todos os valores e retorna um único valor, que é a soma necessária.
console.log(somatotal);

//TENTAR COLOCAR ISSO NO EXERCÍCIO

///MANEIRA 2 DE CALCULAR SOMA DE ELEMENTOS DE OBJETO EM ARRAY
//teste SÓ COM O FOREACH
console.log('calculando soma de elementos de array forma 2');
let total1 = 0;

produto2.listaProdutos.forEach((elemento, i) => {
   return (total1 += Number(elemento.preco));
});
console.log(total1);
//aqui em cima funcionou
