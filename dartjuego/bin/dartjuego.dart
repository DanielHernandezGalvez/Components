import 'package:dartjuego/dartjuego.dart' as dartjuego;

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

// void main() {
//   double area = calcularArea(2.3, 8);
  
//   print('El area es: ${calcularArea(23, 4.5)}');
//   print('El area es : $area');
  
//   String sentir = amor('Soni');
//   print(sentir);
// }

// double calcularArea(double ladoA, double ladoB){
//   double area = ladoA * ladoB;
//   return area;
// }

// String amor(String tuNombre){
//   String resultado = 'Te quiero ' + tuNombre.toUpperCase();
//   return resultado;
// }

// void main(List<String> arguments){
//   id('dani', 'galvez', 25);
// }

// void id(String nombre, String apellido, [var edad]){
//   print('La persona es $nombre, su apellido es: $apellido de $edad años');
// }


// Funciones recursivas
// void main(List<String> arguments){
//  var cinco = factorial(5);
// print(cinco);
// }

// // n*(n-1)*(n-2)...*1
// int factorial(int num){
//   if(num == 1){
//     return 1;
//   } else{
//     return num * factorial(num-1);
//   }
// }


// Función anonima


// void main(List<String> arguments){
//  var lista = ['luis', 'dani', 'soni'];
//  lista.forEach((element) {
   
//  });
// }

//Arrow funcion
// void main(List<String> arguments){
// //  hl();
//   var soni = amor(2,4);
//   print(soni);
// }

// // void hl() => print('hola mundo');

// int amor(int int1, int int2) => int1 * int2;

// void main(List<String> args){
//   var listaA = [3];
//   listaA.add(1);
//   listaA.add(4);
//   listaA.add(14);
  
//   print('Cascada');
//   listaA.forEach(print);
  
//   var listaB  = [];
//   listaB
//   ..add(3)
//   ..add(5)
//   ..add(5);
  
//   print('Sin cscada');
//   listaB.forEach(print);
// }

// void main(List<String> args){
//   var listaA = [3, 4, 32];
//   var listaB = calcularCuadrado(listaA);
//   print(listaA);
//   print(listaB);
//   }

//  List calcularCuadrado(List listaA){
//    var listaB = [];
//    for(var numero in listaA){
//      listaB.add(numero * numero);
//    }
//    return listaB;
//  }
  
  
