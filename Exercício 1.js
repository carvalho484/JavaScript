    function calcularamedia() {
        const numero1 = Number (prompt ("Qual é o primeiro valor: "));
        const numero2 = Number (prompt ("Qual é o segundo valor: "));
        const numero3 = Number (prompt ("Qaul é o terçeiro numero "));

        const media = (numero1 + numero2 + numero3) / 3;

        alert ("Á media é " + media.toFixed(2));
    }   