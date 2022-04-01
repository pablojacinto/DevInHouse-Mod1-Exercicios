class Produto {
   constructor(nome, preco, emestoque, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.emEstoque = emestoque;
      this.quantidade = quantidade;
   }
}

//teste de instanciamento de produto

let produto1 = new Produto('Mesa', 200, true, 2);
console.log(produto1);
