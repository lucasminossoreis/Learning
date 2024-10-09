// Operadores aritméticos, de atribuição e incremento

/**
 * Aritméticos
    * Precedência
    * ()
 *  **
 *  * / %
 *  + - 
 
 *  + Adição | Concatenação
 *  - Subtração
 *  / Divisão
 *  * Multiplicação
 *  ** Potenciação
 *  % Resto da Divisão
 
 *  Incremento
 *  ++ Soma de um em um (pode ser pré incrementado ou pós **pré | pós**)
 *  -- Subtração de um em um (pode ser pré incrementado ou pós **pré | pós**)
 * 
 *  Atribuição
 *  **= | *=
 *  += | -=
 */

const num1 = 5
const num2 = 10
const num3 = "5"
let num4 = 1
num4++

console.log(num1 + num2)
console.log(num1 + num3)
console.log(num4)

const passo = 2
let contador = 2
contador += passo
contador += passo
contador += passo
contador += passo
contador *= passo
console.log(`Este é o contador ${contador}`)

// NaN - Not a Number | parseInt (inteiro) | parseFloat (decimais) | Number()