/*
Operadores Lógicos
&& --> AND --> E     --> false or true -> "false -> retorna o valor mesmo" -> ou true último verdadeiro"
|| --> OR --> OU     --> true || false -> "apenas um verdadeiro vai retornar o valor verdadeiro" ou última falsa
!  --> NOT --> NÃO   --> 
FALSY values
    *false
    *0
    *'' "" ``
    *Null / undefined
    *NaN
*/

 // -- Função com && ---
function falaOi () {
    return "Oi";
}

let vaiExecutar = "Joãozinho"

console.log(vaiExecutar && falaOi());

// -- Função com || ---
const a = 0;
const b = null;
const c = "false_haha";
const d = false;
const e = NaN;

console.log(a || b || c || d || e);