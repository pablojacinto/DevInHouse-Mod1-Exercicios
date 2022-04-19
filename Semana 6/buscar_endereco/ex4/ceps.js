//buscando a api e transformando em json através do then

// const pesquisaCep = () => {
//    let cep = document.getElementById('cep').value;
//    const url = `http://viacep.com.br/ws/${cep}/json/`;

//    fetch(url)
//       .then((response, reject) => {
//          if (!response.ok) {
//             return `Ocorreu um erro: ${reject}`;
//          } else {
//             return response.json();
//          }
//       })
//       .then(console.log) //eu podia fazer (data)=>{data.coisas}
//       .catch((err) => {
//          console.log(err);
//       });
// };

//a mesma coisa, mas com função assíncrona

//função de completar endereço que vai ser chamada lá embaixo. Fiz ela por último, porque primeiro precisa armazenar o objeto json atraves do fetch
function completarEndereco(endereco) {
   document.getElementById('rua').textContent = endereco.logradouro; //poderia fazer a função com tudo isso externamente e só chamar a função. importante colocar o argumento na função - completarEndereço(endereco)
   document.getElementById('bairro').textContent = endereco.bairro;

   document.getElementById('cidade').textContent = endereco.localidade;
}

const pesquisaCepAsync = async () => {
   //aqui tem que declarar o async
   let cep = document.getElementById('cep').value;
   const url = `https://viacep.com.br/ws/${cep}/json/`;
   if (cep.length < 8) {
      alert('CEP INVÁLIDO');
   } else {
      const dados = await fetch(url); //pede pra aguardar o fetch ser resolvido
      const endereco = await dados.json(); //aqui usa o metodo json() para pegar só os dados do retorno do json
      //PERGUNTA como usar catch com async await?
      completarEndereco(endereco); //chamando a função de completar endereço}
   }
};

//Capturando o dado com o addEventListener e lançando a função de pesquiser cep
document.getElementById('buscacep').addEventListener('click', pesquisaCepAsync); //função callback como parâmetro do addeventlistener
//AQUI EU ESTOU USANDO APENAS A FUNÇÃO ASSÍNCRONA
