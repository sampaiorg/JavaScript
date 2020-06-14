const variavel = "conteúdo";

// Algumas funções utilizadas em strings

// Encontra o caracter na posição indicada
console.log(variavel.charAt(3));
console.log(variavel.charAt(5));

// Retorna o codigo do caracter indicado em relação a tabela ANSI
console.log(variavel.charCodeAt(7));

// Retorna a posição do caracter informado na função
console.log(variavel.indexOf('d'));

// Retorna o tamanho da string
console.log(variavel.length);

// Coloca a string em MAIUSCULO
console.log(variavel.toUpperCase(variavel));

// Retorna a string a partirda posição informada, podendo ser informado apenas o início como também o final da string
console.log(variavel.substring(2, 7));

// Concatenação
console.log('palavra ' + 'concatenada ' + variavel.concat(' teste'));

// Substitui caracteres da string conforme parâmetros
console.log(variavel.replace('e', '&'));
