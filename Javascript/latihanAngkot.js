//Latihan Angkot 1
// var jmlAngkot = 20;
// var angkot = 1;
// while (angkot <= jmlAngkot) {
//     console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
// angkot++;
// }

//Latihan Angkot 2
// var jmlAngkot = 10;
// var angkotBeroperasi = 8;
// var noAngkot = 1;
// while (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
// noAngkot++;
// }

// for (var noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
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

//Latihan Angkot 4 (If {Else IF} Else di dalam For)
// var jmlAngkot = 10;
// var noAngkot = 1;
// var angkotBeroperasi = 8;
// for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++){

//     if (noAngkot <= 6){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
//     } else if (noAngkot === 8)
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }

//Latihan Angkot 5 (Double Else If)
// var jmlAngkot = 10;
// var noAngkot = 1;
// var angkotBeroperasi = 8;
// for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++){

//     if (noAngkot <= 6){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
//     } else if (noAngkot === 8) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     } else if (noAngkot === 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }

//Latihan Angkot 6 (Penggunaan Operator Logika)
// var jmlAngkot = 10;
// var noAngkot = 1;
// var angkotBeroperasi = 8;
// for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++){

//     if (noAngkot <= 6){
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
//     } else if (noAngkot === 8 || noAngkot === 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }

var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 8;
for (var noAngkot; noAngkot <= jmlAngkot; noAngkot++){

    if (noAngkot <= 6 && noAngkot !== 5){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}