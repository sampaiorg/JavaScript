// Exibindo string concatenando de forma simples;
let nome = 'Rafael';
console.log('Olá ' + nome);

// Exibindo string utilizando concatenação com template string;
console.log(`Olà ${nome}`);

// Utilizando template string para calculo de expressôes
console.log(`1+1= ${1+1}`);

// Utilizando template string com chamada de funçôes
const alerta = texto => texto.toUpperCase();

console.log(`Ei... ${alerta('cuidado')}`);
