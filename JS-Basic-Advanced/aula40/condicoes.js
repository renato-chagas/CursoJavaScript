// condições em JavaScript


// if, else if, else

const hours = new Date().getHours();

if(hours < 13 && hours >= 6){ // verifica se a hours é menor que 13 e maior ou igual a 6
    console.log('Bom dia!');
}
else if(hours > 12 && hours < 18){ // verifica se a hora é maior que 13 e menor que 18
    console.log('Boa tarde!');
}
else{ // se não for nenhuma das condições acima
    console.log('Boa noite!');
}

/** Operador Ternario
 * precisa ter um else 
 * não da para ter mais de 2 condiçoes 
 * condição ? true : false;
 * */ 

const custoCinema = 30;
const dinehiro  = 10;

! dinehiro > custoCinema ? console.log('pode ir no cinema') : console.log('não pode ir no cinema'); 

// Switch Case

const dia = "sexta";

switch(dia){
    case 'segunda':
        console.log('Hoje é segunda-feira.');
        break;

    case 'terça':
        console.log('Hoje é terça-feira.');
        break;

    case 'quarta':
        console.log('Hoje é quarta-feira.');
        break;

    case 'quinta':
        console.log('Hoje é quinta-feira.');
        break;

    case 'sexta':
        console.log('Hoje é sexta-feira.');
        break;

    case 'sábado':
        console.log('Hoje é sábado.');
        break;

    case 'domingo':
        console.log('Hoje é domingo.');
        break;

    default:
        console.log('Dia inválido.');
}
