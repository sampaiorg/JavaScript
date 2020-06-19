// Variável criada porém não inicializada retorna UNDEFINED
let valor
console.log(valor);

// Variável criada recebendo valor NULL
let valor2 = null
console.log(valor2);


const objeto = {}
//RETORNA O OBJETO VAZIO
console.log(objeto);

//Retorna o atributo undefined
console.log(objeto.nome);

objeto.nome = "Teste";

console.log(objeto.nome);
