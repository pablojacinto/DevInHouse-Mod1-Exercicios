class Pedidos {
   constructor(num) {
      this.numeroPedido = num;
      this.dataPedido = new Date().toLocaleDateString();
      this.estaPago = false;
      this.listaProdutos = [];
   }

   //EX5//método para adicionar produto na array de lista
   adicionarProduto(produtoAdicionado, preco) {
      this.listaProdutos.push({ produtoAdicionado, preco });
   }
   //POR TESTE, RESOLVI FAZER ARRAY DE OBJETOS COM O PRODUTO E O VALOR

   calcularTotal() {
      //quero que pegue os valores "preço" da array listaProdutos e some eles
   }
}

//teste de instanciamento de produto

let produto1 = new Pedidos(1);
produto1.adicionarProduto('carro', 2200);
console.log(produto1);

let produto2 = new Pedidos(2);
produto2.adicionarProduto('Casa');
produto2.adicionarProduto('Mesa', 200);
console.log(produto2);
