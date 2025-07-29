import 'dart:io';

void main() {
  print("Masukkan panjang: ");
  double panjang = double.parse(stdin.readLineSync()!);

  print("Masukkan lebar: ");
  double lebar = double.parse(stdin.readLineSync()!);

  double luas = panjang * lebar;
  double keliling = 2 * (panjang + lebar);

  print('\nHasil Perhitungan:');
  print('Luas      = $luas');
  print('Keliling  = $keliling');
}

