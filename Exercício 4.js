function calcularojuros () {
let valor = Number(prompt ("Qual é o valor do empréstimo ?: "));
let meses = Number(prompt ("Em quantos meses pretende pagar ?: "));
let porcento = Number(prompt ("Quanto é a taxa juros mensal (em %) ?: "));

let juros_ao_mes = valor * (porcento / 100);
let juros_totais = juros_ao_mes * meses;
let valor_total = valor + juros_totais;

alert ("O valor do juro cobrado ao mes é de R$ " + juros_ao_mes.toFixed(2));
alert ("O valor do juro total é de R$ " + juros_totais.toFixed(2));
alert ("O valor total será R$ " + valor_total.toFixed(2));
}