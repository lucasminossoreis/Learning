const   nome = "Lucas"
const   sobrenome = "Reis"
const   idade = 30
const   alturaEmM = 1.75
const   peso = 74.1
let     imc;
let     anoNascimento;

imc = peso / (alturaEmM*alturaEmM)
anoNascimento = 2024 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, ou seja, nasceu em ${anoNascimento}, pesa ${peso} kg, tem ${alturaEmM} metros de altura e seu IMC é ${imc}.`)