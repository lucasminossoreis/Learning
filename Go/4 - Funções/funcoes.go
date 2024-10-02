package main

import "fmt"

func somar(n1, n2 int8) int8 { // Se variável for do mesmo tipo, pode informar apenas no último.
	return n1 + n2
}

func calculosMatematicos(n1, n2 int8) (int8, int8) {
	soma := n1 + n2
	subtracao := n1 - n2
	return soma, subtracao
}

func main() {
	soma := somar(10, 20)
	fmt.Println(soma)

	var f = func(txt string) string {
		println(txt)
		return txt
	}

	resultado := f("Texto da Função 1")
	fmt.Println(resultado)

	resultadoSoma, _ := calculosMatematicos(10, 15) //Utilizar o underline pode esconder a variável.
	fmt.Println(resultadoSoma)
}
