class Produto {
   constructor(nome, preco, emestoque, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.emEstoque = emestoque;
      this.quantidade = quantidade;
   }
}

class Pedidos {
   numeroPedido;

   nomeCliente;
   total = 0;
   constructor() {
      this.dataPedido = new Date().toLocaleDateString();
      this.estaPago = false;
      this.listaProdutos = [];
   }

   //método para adicionar produto na array de lista
   adicionarProduto(produtoAdicionado, preco) {
      this.listaProdutos.push({ produtoAdicionado, preco });
   }

   //tentar calcular o total

   // calcularTotal() {
   //    for (i = this.listaProdutos.length - 1; i >= 0; i--) {
   //       this.total += this.listaProdutos[i].preco; //ERRO
   //    }
   // }

   calcularTotal() {
      for (total of this.listaProdutos) {
         this.total += this.listaProdutos.preco;

         console.log(this.total);
      }
   }
}

let pedido1 = new Pedidos();

//adicionando um produto
pedido1.adicionarProduto('casa', 100);
pedido1.adicionarProduto('bola', 200);
pedido1.calcularTotal();
console
   .log(pedido1)
   // function totalfora() {
   //    for (i = pedido1.listaProdutos.length - 1; i >= 0; i--) {
   //       pedido1.total += pedido1.listaProdutos[length - 1].preco;
   //    }
   // }

   //O FOR - fora funcionou. Dentro da classe não.

   // for (i = pedido1.listaProdutos.length - 1; i >= 0; i--) {
   //    pedido1.total += pedido1.listaProdutos[i].preco;
   // }

   .console.log(pedido1.listaProdutos);
console.log(pedido1.total);

/// Instanciando produtos

let fogao = new Produto('Fogão', 500, true, 2);
let geladeira = new Produto('Geladeira', 1500, true, 1);
let forno = new Produto('Forno', 400, true, 3);
let lavadora = new Produto('Lavadora', 800, true, 5);
let mesa = new Produto('Mesa', 200, true, 2);

function valorPagar(...prod) {
   //criou uma array com o map contendo a multiplicação dos preços dos elementos pela quantidade pedida. Conferi e funcionou.

   let valortotal = prod.map((element) => {
      return element.preco * element.quantidade;
   });

   //se colocar  return valortotal;, ele vai retornar a array formada no .map

   //agora tentando somar elementos de uma array
}
console.log(valorPagar(fogao, geladeira, forno, lavadora, mesa));

///testando outro pedido
let pedido2 = new Pedidos();

pedido2.adicionarProduto('casa', 200);
pedido2.adicionarProduto('bola', 200);

console.log(pedido2.calcularTotal());
