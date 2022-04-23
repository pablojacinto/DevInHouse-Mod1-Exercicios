import { Component, OnInit } from '@angular/core';

//fazendo uma interface com a constante, contendo os elementos de cada item do menu
interface umMenu {
  imagem: string;
  titulo: string;
  descricao: string;
  link: string;
}
@Component({
  selector: 'esp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  listaMenu: umMenu[] = [
    {
      imagem:
        'https://www.sumerbol.com.br/uploads/images/2019/01/strogonoff-de-frango-1548843823.jpg',
      titulo: 'Strogonoff',
      descricao: 'esse a receita do',
      link: '#',
    },
    {
      imagem:
        'https://www.simplyrecipes.com/thmb/F35HzR-D4g8nl9NKk6lNevsmebY=/2000x1334/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__03__HT-Make-Roast-Chicken-LEAD-5v2-51de85b6d52a4691885f9d6680d958b1.jpg',
      titulo: 'Frango Assado',
      descricao: 'Acesse a receita do',
      link: '#',
    },
    {
      imagem:
        'https://img.itdg.com.br/tdg/images/recipes/000/030/068/328929/328929_original.jpg?mode=crop&width=710&height=400',
      titulo: 'Empanado de Frango',
      descricao: 'Acesse a receita do',
      link: '#',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
