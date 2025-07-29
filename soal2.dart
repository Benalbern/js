import 'dart:io';

void main() {
  print('Masukkan sebuah angka: ');
  int angka = int.parse(stdin.readLineSync()!);

  if (angka % 2 == 0) {
    print('$angka adalah angka genap.');
  } else {
    print('$angka adalah angka ganjil.');
  }
}