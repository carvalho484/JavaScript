const a = Number (prompt ("Qual é o valor do primeiro numero: "))
const b = Number (prompt ("Qual é o valor do segundo numero: "))
const c = Number (prompt ("Qual e o valor do terceiro numero: "))
const escolha = prompt ("Escolha a ordem de ordenação: 'crescente' ou 'decrescente'")

const numeros = [a, b, c]

if (escolha == "crescente") {
numeros.sort (function (x, y) {
    return x - y;
});
alert ("Numeros em ordem crescente " + numeros);
} else if (escolha == "decrescente") {
    numeros.sort (function (x, y) {
        return y - x;
    });
    alert ("Numeros em ordem decrescente " + numeros);
}else {
    alert ("Escolha inválida! Use 'crescente' ou 'decrescente'.");
}

