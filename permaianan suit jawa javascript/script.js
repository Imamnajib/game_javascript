tanya = true;

while (tanya){
    // menangkap pilihan layar
    var p = prompt('pilih : gajah , semut , orang')

    //menangkap piliha komputer
    //mambangkitkan bilangan random 
    var comp = Math.random()
    if(comp < 0.34){
        comp = 'gajah'

    }else if ( comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else {
        comp = 'semut';
    }

    var hasil = '';
    //menentukan rules
    if (p == comp){
        hasil = 'SERII';

    }else if(p == 'gajah'){
        hasil =  (comp == 'orang') ? 'menang' : 'kalah'
    }else if(p == 'semut'){
        hasil = (comp == 'gajah') ? 'menang': 'kalah'
    }else if(comp == 'orang'){
        hasil =  (comp == "semut") ? 'menang' : 'kalah'
    }else {
        hasil = ('anda memasukan variabel yang salah ')
    }
    //tampilka hasilnya
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n maka hasilnya kamu :' + hasil);
    tanya = confirm('lagi ??');
}
alert('terimakasih sudah bermain');
