tanya = true;
while (tanya){

    // variabel yang akan di deklarasikan
var angka = Math.floor(Math.random() * 10) +1; 
var percobaan = 0;
var maxPercobaan = 3;
var menang = false;

    // menampilkan di layar
while (percobaan <  maxPercobaan){
    var input = prompt('tebak angka dari 1 - 10');
    var tebakan = parseInt(input);

    percobaan ++;
    //pengkondisian angka
    if (tebakan === angka){
        alert('kamu benar');
        menang = true;
        break;
    }else if (tebakan < angka){
        alert ('terlalu KECIL angka nya')
    }else if (tebakan > angka){
        alert ('terlalu BESAR angka nya')
    }else{
        alert('input tidak valid ')
    }
}

if(!menang){
    alert('kesempatan habis angkanya adalah ' + angka)
}
tanya = confirm('lagii ?? ')
}


alert('terimaksih sudah bermain ')
