let texto = "Um texto"

//encontrar letras e expressão regular

console.log(texto.match(/[a-z]/g)); // retorna um array com todas as letras minusculas
console.log(texto.match(/[a-z]/)); // retorna a primeira letra minuscula
console.log(texto.search(/[a-z]/)); // retorna o indice da primeira letra minuscula