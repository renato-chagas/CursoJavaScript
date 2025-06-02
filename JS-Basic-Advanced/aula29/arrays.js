const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos); // Retorna ['Luiz', 'Maria', 'João'].

console.log(alunos[0]); // Retorna Luiz.

console.log(alunos[1]); // Retorna Maria.

console.log(alunos.unshift('Fábio')); // Retorna 4, adiciona um elemento no início do array.

console.log((alunos.shift())); // Retorna Fábio, remove o primeiro elemento do array.

console.log(alunos.pop()) // Retorna João, remove o último elemento do array.

console.log(delete alunos[1]); // Retorna true, remove o elemento do índice 1.

console.log(alunos.push('Luiza')); // Retorna 3, adiciona um elemento no final do array.

console.log(alunos.slice(0,1)); // Retorna ['Luiz'], retorna um novo array com os elementos do índice 0 ao 1.

console.log(typeof alunos); // Retorna object.

console.log(alunos instanceof Array); // Retorna true, verifica se é um array.

const numeros = [1, 2, 3];
const [primeiro, segundo] = numeros; //retorna 1, 2
console.log(primeiro, segundo); 

const [um, , tres] = numeros; //retorna 1, 3
console.log(um, tres);

const numeros2 = [
    //  0
   //0  1  2
    [1, 2, 3],
    //  1
   //0  1  2
    [4, 5, 6],
    //  3
   //0  1  2
    [7, 8, 9]
];
console.log(numeros2[1][2]); //retorna 6


