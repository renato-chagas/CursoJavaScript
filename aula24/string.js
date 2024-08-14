//Concatenação de strings

let texto = "Um texto"

console.log(texto.concat(' em um belo dia.')); // Um texto em um belo dia.
console.log(texto + ' em um belo dia.'); // Um texto em um belo dia.
console.log(`${texto} em um lindo dia`); // Um texto em um belo dia.

//Indice de strings

console.log(texto.indexOf('texto')); // procura o indice da palavra "texto" no texto
console.log(texto.indexOf('Um', 3));   // começa a partir do indice 3 e como nao tem "Um" ele retorna -1
console.log(texto.lastIndexOf('o', 3)); // procura a ultima ocorrencia de "o" a partir do indice 3

//Tamanho de strings

console.log(texto.length); // retorna o tamanho da string

//encontrar letras e expressão regular

console.log(texto.match(/[a-z]/g)); // retorna um array com todas as letras minusculas
console.log(texto.match(/[a-z]/)); // retorna a primeira letra minuscula

console.log(texto.search(/[a-z]/)); // retorna o indice da primeira letra minuscula