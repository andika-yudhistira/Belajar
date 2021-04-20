// var angka = 3;
// if (angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// }
// if (angka % 2 ==) {
//     alert(angka + ' adalah bilanagan GANJIL');
// }

//IF ELSE
// var angka = prompt('Masukkan Angka');
// if (angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else {
//     alert(angka + ' adalah bilanagan GANJIL');
// }

//Latihan Angkot 3 (If Else di dalam For)
// var jmlAngkot = 10;
// var noAngkot = 1;
// var angkotBeroperasi = 8;
// for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++){

//     if (noAngkot <= 6){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
//     } else
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
// }

//IF {ELSE IF} ELSE
// var angka = prompt('Masukkan Angka');
// if (angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if (angka % 2 == 1) {
//     alert(angka + ' adalah bilanagan GANJIL');
// } else {
//     alert('yang anda masukkan bukan angka!');
// }

//Latihan Angkot 4 (If {Else IF} Else di dalam For)
var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 8;
for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++){

    if (noAngkot <= 6){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
    } else if (noAngkot === 8)
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}