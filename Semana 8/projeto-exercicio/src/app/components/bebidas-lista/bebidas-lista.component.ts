import { Component, OnInit } from '@angular/core';

interface bebidasLista {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
}

@Component({
  selector: 'esp-bebidas-lista',
  templateUrl: './bebidas-lista.component.html',
  styleUrls: ['./bebidas-lista.component.scss'],
})
export class BebidasListaComponent implements OnInit {
  bebidasLista: bebidasLista[] = [
    {
      imagem:
        'https://img.itdg.com.br/tdg/images/recipes/000/128/825/319875/319875_original.jpg?mode=crop&width=710&height=400',
      titulo: 'Caipirinha',
      descricao: 'Acesse receita de',
      link: '',
    },
    {
      imagem:
        'https://backend-live.apto.vc/wp-content/uploads/2021/03/Copos-de-cerveja-brindando-scaled.jpg',
      titulo: 'Cerveja',
      descricao: 'Acesse receita de',
      link: '',
    },
    {
      imagem:
        'http://conteudo.imguol.com.br/c/entretenimento/d7/2018/03/16/agua-de-coco-1521212503283_v2_1254x836.jpg',
      titulo: 'Água de Coco',
      descricao: 'Acesse receita de',
      link: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
