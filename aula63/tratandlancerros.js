// tratando e lançando erros


// try exemplos

try {
    console.log(naoExisto);
}
catch (error) {
    console.log('naoExisto não existe.');
    console.log(error);
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('esse erro é lançado.');
    }
    return x + y;
}
try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}
catch (error) {
    console.log(error);
}
