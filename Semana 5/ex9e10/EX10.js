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
