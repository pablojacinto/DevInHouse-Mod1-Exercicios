//criar a função que vai receber a promise
function sleep(valor) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let error = false;

         if (!error) {
            resolve(console.log(`Tempo de sleep ${valor} segundos`));
         } else {
            reject(console.log('TEVE ERRO'));
         }
      }, valor * 1000);
   });
}

//chamar a função
sleep(3);

///OUTRA FORMA DE FAZER

const meuSleep = new Promise((resolve, reject) => {
   setTimeout(() => {
      let error = false;

      if (!error) {
         resolve(`Tempo de sleep cinco segundos`);
         // resolve(console.log(`Tempo de sleep cinco segundos`));
      } else {
         reject(console.log('TEVE ERRO'));
      }
   }, 5000);
});

// //chamar a promise.
meuSleep.then((respostaDaPromise) => {
   console.log(respostaDaPromise);
});

// //chamar a promise encadeando o then.

meuSleep
   .then((resposta) => {
      return resposta.toUpperCase();
   })
   .then((stringmodificado) => {
      console.log(stringmodificado);
   });
