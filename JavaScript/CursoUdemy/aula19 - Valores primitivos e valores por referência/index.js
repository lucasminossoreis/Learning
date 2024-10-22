/*
Primitivos (imutáveis) - (valores copiados)     --> string, number, boolean, undefined, null (bigint, symbol)
Referência (mutável) - (valores por referência) --> array, object, function
*/

/*  --> imutáveis
        let nome = "Luiz";
        nome = "Otávio";
        console.log(nome[0]);

        let a = "A";
        let b = a;   //cópia do valor de a
        console.log(a,b);

        a = "Outra coisa";
        console.log(a,b);
*/

    let a = [1, 2, 3];
    let b = a;
    console.log(a,b);

    a.push(4);
    console.log(a,b)

    b.pop();
    console.log(a,b);

    // a mesma coisa dos mutáveis serve para object e function
