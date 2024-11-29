#include<stdio.h>
#include<locale.h>

int main(void)
{
    float   salario1, salario2, salario3, soma, media;
    char    nome[40];
    int     codigo;

    setlocale   (LC_ALL, "portuguese");
    printf      ("Digite o nome:");
    fflush      (stdin);
    gets        (nome);
    printf      ("Digite o codigo:");
    fflush      (stdin);
    scanf       ("%d", &codigo);
    printf      ("Primeiro salario:");
    fflush      (stdin);
    scanf       ("%f", &salario1);
    printf      ("Segundo salario:");
    fflush      (stdin);
    scanf       ("%f", &salario2);
    printf      ("Terceiro salario:");
    fflush      (stdin);
    scanf       ("%f", &salario3);

    soma = salario1+salario2+salario3;
    media = soma/3;

    printf  ("\n==========||==========");
    printf  ("\n Nome  : %30s", nome);
    printf  ("\n Codigo: %30d", codigo);
    printf  ("\n \t Salario1: %10.3f", salario1);
    printf  ("\n \t Salario2: %10.3f", salario2);
    printf  ("\n \t Salario3: %10.3f", salario3);
    printf  ("\n\n %.3f + %.3f + %.3f = %.3f", salario1, salario2, salario3, soma);
    printf  ("\n Media do funcionario: %.3f", media);
    printf  ("\n==========||=========="); 

    return 0;
}