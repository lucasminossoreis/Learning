#include<stdio.h>
#include<string.h>

int main(void)
{
    float   valor, bonus;
    char    sexo;

    printf      ("\n Digite o valor da compra:");
    scanf       ("\n %f", &valor);
    printf      ("\n Digite F-Feminino ou M-Masculino:");
    fflush      (stdin);
    
    sexo = toupper(getchar());

    if ((sexo == 'M')) {
        bonus = valor * 0.15;
        valor = valor - bonus;
    }

    printf  ("\n Valor do bonus: %.2f", bonus);
    printf  ("\n Valor final da compra: %.2f", valor);
    
    return  0;
}