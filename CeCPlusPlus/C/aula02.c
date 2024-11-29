#include<stdio.h>
#include<locale.h>

int main(void)
{
    char sexo;
    char nome[30];
    float nota1, nota2;
    setlocale(LC_ALL, "portuguese");
    printf("\nDigite o nome do aluno:");
    fflush(stdin);
    gets(nome);
    printf("\nInforme o sexo (F/M):");
    fflush(stdin);
    sexo=getchar();  
    printf("\nInforme a nota 1:");
    scanf("%f", &nota1);
    printf("\nInforme a nota 2:");
    scanf("%f", &nota2);
    printf("\n%s é do sexo %c e possui  media = %2.f", nome, sexo, (nota1+nota2)/2);
    
    return 0;
}