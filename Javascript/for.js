//Latihan For

// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
//     console.log('Hello World! ' + nilaiAwal + 'x');
// }


//Latihan Angkot 2
var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
noAngkot++;
}

for (var noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}