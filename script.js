var numero = 7;
var contador = 0;
var soma = 0;
var produto = 1;

if (numero % 2 == 0) {
    contador = numero;
    console.log(`A soma dos seguintes numeros pares ate chegar em ${numero}:`);
    while (contador > 0) {
        soma = soma + contador;
        console.log(`${contador}`);
        contador = contador - 2;
    }
    console.log(`é ${soma}`);
} else if (numero % 2 == 1) {
    contador = numero;
    console.log(`O produto dos seguintes numeros impares ate chegar em ${numero}:`);
    while (contador > 1) {
        produto = produto * contador;
        console.log(`${contador}`);
        contador = contador - 2;
    }
    console.log(`é ${produto}`);
} else {
    console.log(`Operação inválida!`);
}
