/* function soma(x = 1,y = 1) {
    const resultado = x+y;
    return resultado;
}

const resultado = soma(4,2);
console.log(resultado);
*/

const raiz = function(n) {   // modo tradicional de criar funções
return n ** 0.5;
};

const raiz2 = n => n ** 0.5; // modo simplificado de criar funções usando arrow =>

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

console.log(raiz2(9))
console.log(raiz2(16))
console.log(raiz2(25))