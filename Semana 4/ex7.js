function conversor() {
   let valorTemp = document.getElementById('celsius').value;

   let tempF = (valorTemp * 9) / 5 + 32;
   document.getElementById('farenheit').textContent = tempF;
}

//agora fazer o que o exercício pede
let arrayF = [0, 32, 45, 50, 75, 80, 99, 120];
let arrayC = arrayF.map((elem) => {
   return Math.round(((elem - 32) * 5) / 9);
});

console.log(arrayF);
