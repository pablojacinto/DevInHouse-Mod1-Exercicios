var animais = [
   { animal: 'Cachorro', raca: 'Akita' },
   { animal: 'Cachorro', raca: 'Boxer' },
   { animal: 'Cachorro', raca: 'Dálmata' },
   { animal: 'Cachorro', raca: 'Pastor alemão' },
   { animal: 'Gato', raca: 'Persa' },
   { animal: 'Gato', raca: 'Sphynx' },
   { animal: 'Gato', raca: 'Siamês' },
];

animais.forEach((bicho, indice) => {
   console.log(
      'O ' +
         (indice + 1) +
         'º' +
         ' ' +
         bicho.animal +
         ' é um animal da raça ' +
         bicho.raca
   );
});

//array.foreach(
// function(elemento, index, array) {AQUI EU COLOCO O QUE EU QUERO QUE FAÇA, SE É IMPRIMIR OU CONSOLE}
// )
// dentro do foreach entra uma função anônima. O primeiro parâmetro da função anônima tem o elemento da array, o segundo tem o índice da array, e o terceiro tem a array inteira
