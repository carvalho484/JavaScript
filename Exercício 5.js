function calculojuroscomposto () {
 let valor = Number (prompt ("Qual é o valor do emprestiomo ?: "));
 let meses = Number (prompt ("Em quantos meses sera parcelado ?: "));
 let porcento = Number (prompt ("Qual é a taxa por mes ?; "));

 let juros_totais = valor * ((1 + (porcento / 100)) **meses) - valor;
 let valor_total = valor + juros_totais;

 alert (`O juros total é de R$ ${juros_totais.toFixed(2)}
         O valor total a ser pagar é R$ ${valor_total.toFixed(2)}`);
}        