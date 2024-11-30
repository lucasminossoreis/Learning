#include<stdio.h>

int main (void) {

    float   ingresso;
    int     idade;

    printf  ("Digite sua idade:");
    scanf   ("%d", &idade);

    if (idade <= 16) {
        ingresso = 15;
        printf  ("\n ingresso para jovem");
    }
    else {
        ingresso = 30;
        printf  ("\n ingresso para adulto");
    }

    printf  ("\n O valor do ingresso eh: %.0f", ingresso);

    return 0;
}