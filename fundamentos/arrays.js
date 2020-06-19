const valores = [4.5, 33.2, 7.8, 9.3]
console.log(valores);

console.log(valores[2]);


// atribuindo valor a uma posição que não existe;
valores[4] = 10
console.log(valores);

// Retorna o tamanho da array
console.log(valores.length);

// Adiciona valores em uma array;
valores.push('texto', 3, {nome:'rafael'}, {id: 3}, false, null)
console.log(valores);

// Retira o último valor de uma array
valores.pop()

// Retira um valor específico informado no array
delete valores [5]

console.log(valores);

// Apenas para informar que no JS uma array é do tipo objeto
console.log(typeof valores);





