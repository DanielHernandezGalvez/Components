import 'dart:math';
import 'dart:io';

void main(List<String> arguments) {
  var userWins = 0;
  var computerWins = 0;

  var opciones = ['piedra', 'papel', 'tijera'];

  while (true) {
    print('Elige: piedra, papel, tijera o introduce q para salir');
    var eleccionUsuario = stdin.readLineSync()!.toLowerCase();
    if (eleccionUsuario.toString() == 'q') {
      break;
    }
    if (!opciones.contains(eleccionUsuario)) {
      print('Error, elije piedra, papel o tijera');
      continue;
    }

    Random random = Random();
    var randomNumber = random.nextInt(2);
    var eleccionOrdenador = opciones[randomNumber];

    print('El ordenador ha elejido: $eleccionOrdenador');
    if (eleccionUsuario == 'piedra' && eleccionOrdenador == 'tijera') {
      print('Has ganado');
      userWins++;
    } else if (eleccionUsuario == 'papel' && eleccionOrdenador == 'piedra') {
      print('Has ganado');
      userWins++;
    } else if (eleccionUsuario == 'tijeras' && eleccionOrdenador == 'papel') {
      print('Has ganado');
      userWins++;
    } else if (eleccionOrdenador == eleccionUsuario) {
      print('Empate');
    } else {
      print('Has perdido');
      computerWins++;
    }
  }
  print('Tus puntos: $userWins');
  print('Puntos del ordenaro: $computerWins');
  if (computerWins > userWins) {
    print('Has perdido');
  } else {
    print('Has ganado');
  }
}
// import 'dart:math';
// void main(List<String> arguments) {
//   var lista = [
//     3,
//     45,
//     3,
//     1,
//     4,
//     23,
//     5,
//     24,
//   ];

//   var maximo = 0;
//   for (var numero in lista) {
//     if (maximo < numero) {
//       maximo = numero;
//     }
//     print('Ciclo: $maximo $numero');
//   }
//   print('El maximo es $maximo');

//   // Calcular el minimo

//   var minimo;

//   for (var numero in lista) {
//     if (minimo == null || minimo > numero) {
//       minimo = numero;
//     }
//     print('Ciclo: $minimo $numero');
//   }
//   print('El mínimo es $minimo');

//   print(lista.reduce(min));
//   print(lista.reduce(max));

// }
