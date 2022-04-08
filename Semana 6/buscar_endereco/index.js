let cep;

function buscarCep() {
   cep = document.getElementById('cep').value;
}
// console.log(cep);

fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then((response) => {
      return response.json;
   })
   .then((endereco) => {
      console.log(endereco);
   })
   .catch((err) => {
      `Houve um erro: ${err}`;
   });
