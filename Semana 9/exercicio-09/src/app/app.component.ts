import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/assets/exercicio09';
import { produtos } from 'src/assets/produtos'; //importando de outro arquivo

@Component({
  selector: 'exc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, Produto {
  //implementei o produto

  title = 'exercicio-09';
  valorTotal: number = 0;

  //propriedades do Produto
  nome: string = '';
  valor: number = 0;
  codigo: number = 0;
  quantidade: number = 0;
  emEstoque: boolean = true;

  //Inicializando os objetos
  produtos: Produto[] = produtos; //eu importei de outro arquivo
  ////

  constructor() {}

  ngOnInit(): void {
    this.comprar(produtos[0], 3);
    this.comprar(produtos[1], 3);
  }

  comprar(produto: Produto, qtd: number): void {
    if (produto.emEstoque == true) {
      this.valorTotal += produto.valor * qtd;
      produto.quantidade -= qtd;
    }
  }
}
