   function converterKB() {
    const bytes = Number (prompt("Qual é o numero de bytes: "));

    const kb = bytes / 1024;

    alert ("O bytes convertido para KB é " + kb.toFixed(2) + "KB");
   }