import 'dart:io';
void main() {

  double luasLingkaran(double jari) {
  return 3.14 * jari * jari;
}

  print("Masukkan ruas: ");
  double r = double.parse(stdin.readLineSync()!);

  print('Luas lingkaran dengan jari-jari $r adalah ${luasLingkaran(r)}');
}