import 'dart:math';
void main(List<String> arguments) {
  var lista = [
    3,
    45,
    3,
    1,
    4,
    23,
    5,
    24,
  ];

  var maximo = 0;
  for (var numero in lista) {
    if (maximo < numero) {
      maximo = numero;
    }
    print('Ciclo: $maximo $numero');
  }
  print('El maximo es $maximo');

  // Calcular el minimo

  var minimo;

  for (var numero in lista) {
    if (minimo == null || minimo > numero) {
      minimo = numero;
    }
    print('Ciclo: $minimo $numero');
  }
  print('El mínimo es $minimo');

  print(lista.reduce(min));
  print(lista.reduce(max));

}
