#include<stdio.h>

int main (void) {

float   valorCompra, desconto;
int     qtdProd;

printf  ("\n Digite o valor da compra:");
scanf   ("%f", &valorCompra);
fflush  (stdin);
printf  ("\n Digite a quantidade de produtos:");
scanf   ("%d", &qtdProd);

if (qtdProd <= 10) {
    desconto = valorCompra * 0.8;
} else if (qtdProd > 10 && qtdProd <= 20) {
    desconto = valorCompra * 0.7;
} else {
    desconto = valorCompra * 0.5;
}

printf  ("\n O valor da compra aplicado o desconto eh: %2.f", desconto);

return 0;

}