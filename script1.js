function GerarTabuada() {
    var numero = document.getElementById("numero").value;
  
    // Verifica se o número está em branco
    if (numero === "") {
      alert("Por favor, informe um número.");
      return;
    }
  
    numero = parseInt(numero);
    var tabuada = "";
  
    for (var i = 1; i <= 10; i++) {
      tabuada += numero + " x " + i + " = " + numero * i + "<br>";
    }
  
    document.getElementById("res").innerHTML = tabuada;
  }
  
 
    
  