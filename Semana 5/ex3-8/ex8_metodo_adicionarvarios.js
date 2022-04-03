class Produto {
   constructor(nome, preco, emestoque, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.emestoque = emestoque;
      this.quantidade = quantidade;
   }
}

class Pedidos {
   constructor(num) {
      this.numeroPedido = num;
      this.dataPedido = new Date().toLocaleDateString(); //data atual
      this.estaPago = false;
      this.listaProdutos = [];
      this.totalaPagar = 0;
   }

   adicionarProduto(produto) {
      if (produto instanceof Produto) {
         this.listaProdutos.push(produto);
      }
   }

   adicionarProdutos(...produtosAdicionados) {
      this.listaProdutos = [...this.listaProdutos, ...produtosAdicionados];
   }

   calcularTotal() {
      this.listaProdutos.forEach((elemento) => {
         return (this.totalaPagar += elemento.preco * elemento.quantidade);
      });
   }
}

//TESTANDO SE PRESTOU

//INSTANCIANDO PRODUTOS
const mesa = new Produto('mesa', 200, 5, 2);
const casa = new Produto('Casa', 500, 4, 4);
const bola = new Produto('Bola', 560, 4, 1);
const celular = new Produto('Celular', 100, 4, 3);
const peixe = new Produto('Peixe', 300, 4, 5);

//PRIMEIRO PEDIDO
let pedido1 = new Pedidos(20220001);
pedido1.adicionarProduto(mesa);
pedido1.adicionarProduto(bola);
pedido1.adicionarProduto(peixe);
pedido1.calcularTotal();

console.log(pedido1);
console.log('o total a pagar é = ' + pedido1.totalaPagar);

//segundo pedido
let pedido2 = new Pedidos(20220002);
//pedido2.adicionarProduto(celular, casa, mesa); //dá pra adicionar ambos assim? Teria que usar o rest? Como fazer??
console.log('Teste Mika');
pedido2.adicionarProdutos(celular, casa, mesa); //fiz outro método para adicionar mais de um produto

pedido2.calcularTotal();

console.log(pedido2);
