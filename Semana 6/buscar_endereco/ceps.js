//buscando a api e transformando em json através do then

const pesquisaCep = () => {
   let cep = document.getElementById('cep').value;
   const url = `http://viacep.com.br/ws/${cep}/json/`;

   fetch(url)
      .then((response, reject) => {
         if (!response.ok) {
            return `Ocorreu um erro: ${reject}`;
         } else {
            return response.json();
         }
      })
      .then(console.log) //eu podia fazer (data)=>{data.coisas}
      .catch((err) => {
         console.log(err);
      });
};

//a mesma coisa, mas com função assíncrona

const pesquisaCepAsync = async () => {
   //aqui tem que declarar o async
   let cep = document.getElementById('cep').value;
   const url = `http://viacep.com.br/ws/${cep}/json/`;

   const dados = await fetch(url); //pede pra aguardar o fetch ser resolvido
   const endereco = await dados.json(); //aqui usa o metodo json() para pegar só os dados do retorno do json

   document.getElementById('rua').textContent = endereco.logradouro;
   document.getElementById('bairro').textContent = endereco.bairro;
   document.getElementById('cidade').textContent = endereco.localidade;
};
//Capturando o dado com o addEventListener e lançando a função de pesquiser cep
document.getElementById('buscacep').addEventListener('click', pesquisaCepAsync); //função callback como parâmetro do addeventlistener
//AQUI EU ESTOU USANDO APENAS A FUNÇÃO ASSÍNCRONA
