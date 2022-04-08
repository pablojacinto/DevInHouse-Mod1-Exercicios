fetch(`https://viacep.com.br/ws/01001000/json/`)
   .then((response) => {
      return response.json;
   })
   .then((endereco) => {
      console.log(endereco);
   })
   .catch((err) => {
      `Houve um erro: ${err}`;
   });
