const data = new Date('1994-04-19 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
    diaSemanaTexto = 'Quarta-feira';
    break;
    case 4:
    diaSemanaTexto = 'Quinta-feira';
    break;
    case 5:
    diaSemanaTexto = 'Sexta-feira';
    break;
    case 6:
    diaSemanaTexto = 'Sábado';
    break;
    default:
        diaSemanaTexto = '';
    break;
}

console.log(diaSemana, diaSemanaTexto);

/*
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira';
console.log(diaSemana, diaSemanaTexto);
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';
console.log(diaSemana, diaSemanaTexto);
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
console.log(diaSemana, diaSemanaTexto);
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
console.log(diaSemana, diaSemanaTexto);
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
console.log(diaSemana, diaSemanaTexto);
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
console.log(diaSemana, diaSemanaTexto);
}
*/