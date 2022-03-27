var arrCidades = [
   { nome: 'Patos de Minas', populacao: 153585 },
   { nome: 'Lages', populacao: 157349 },
   { nome: 'Ibiúna', populacao: 79479 },
   { nome: 'Maringá', populacao: 403063 },
   { nome: 'Curitiba', populacao: 1963726 },
   { nome: 'Florianópolis', populacao: 508826 },
   { nome: 'Pato Branco', populacao: 84779 },
];

arrCidades.forEach((cidade, index) => {
   console.log(
      index +
         1 +
         ' esta cidade se chama ' +
         cidade.nome +
         ' e tem uma população de ' +
         cidade.populacao +
         ' habitantes.'
   );
});

//filter

const cidadesGrandes = arrCidades.filter((cidade) => cidade.populacao > 200000);

//copiar array

const copyCidadesgrandes = [...cidadesGrandes];
//sort
copyCidadesgrandes.sort((a, b) => {
   return a.populacao - b.populacao;
});
console.log(cidadesGrandes);
console.log(copyCidadesgrandes);

//[M1S04] - Ex 9 - Verificar se array contem item

//copiando a array
const cidadesEX9 = [...arrCidades];
