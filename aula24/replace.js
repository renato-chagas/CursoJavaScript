let texto = "Um texto"
let textoRato = "O rato roeu a roupa do rei de roma."

console.log(texto.replace('Um', 'Outro')); // Substitui a palavra "Um" por "Outro"
console.log(texto.replace(/Um/, 'Outro')); // Substitui a palavra "Um" por "Outro"
console.log(textoRato.replace(/r/g, '#')); // Substitui todas as letras "r" por "#"

