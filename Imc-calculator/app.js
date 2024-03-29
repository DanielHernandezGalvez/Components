function calcularIMC() {
    
    // Obtenemos los valores del formulario
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    // Calculamos el IMC
    var imc = peso / (altura * altura / 10000);
  
    // Obtenemos la clasificación del IMC
    var clasificacion = "";
    if (imc < 18.5) {
      clasificacion = "Peso bajo";
    } else if (imc < 25) {
      clasificacion = "Peso normal";
    } else if (imc < 30) {
      clasificacion = "Sobrepeso";
    } else if (imc < 35) {
      clasificacion = "Obesidad grado I";
    } else if (imc < 40) {
      clasificacion = "Obesidad grado II";
    } else {
      clasificacion = "Obesidad grado III";
    }
  
    // Mostramos el resultado
    document.getElementById("resultado").innerHTML =
      "Tu IMC es de " + imc.toFixed(2) + ". Tu clasificación es " + clasificacion;
  }
