let texto = "Um texto"

//Indice de strings

console.log(texto.indexOf('texto')); // procura o indice da palavra "texto" no texto
console.log(texto.indexOf('Um', 3));   // começa a partir do indice 3 e como nao tem "Um" ele retorna -1
console.log(texto.lastIndexOf('o', 3)); // procura a ultima ocorrencia de "o" a partir do indice 3
