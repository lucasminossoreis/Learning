#include<stdio.h>

int main (void) {

    int     codigo;

    printf  ("\n Digite o codigo do curso:");
    scanf   ("%d", &codigo);

    switch  (codigo)
    {
    case 1:
        printf  ("\n 1- Analise e Desenvolvimento de Sistemas");
        break;
    case 2:
        printf  ("\n 2- Engenharia de Computacao");
        break;
    case 3:
        printf  ("\n 3- Gestao da Tecnologia da Informacao");
        break;
    case 4:
        printf  ("\n 4- Redes de Computadorees");
        break;
    case 5:
        printf  ("\n 5- Seguranca da Informacao");
        break;

    default:
        printf  ("\n x- Curso nao localizado.");
        break;
    }

    return 0;
}