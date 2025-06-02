function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2); 
}
function setResult() {
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    const resultadoElement = document.querySelector('#resultado');  
    const resultado = calcularIMC(peso, altura);
    resultadoElement.innerHTML = `<p>Seu IMC é ${resultado}</p>`;
}