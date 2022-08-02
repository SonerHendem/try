document.write('<hr />'+'FONKSİYON DERSLERİ   '+'<hr />')


//-------------------------------------
document.write('<hr />' +'Fonksiyon() = FONKSİYONLARIN KAPSAMA ALANI! (fonksiyonlar dışardan paramatre alabilir.) '+'<hr />')
let bir = 'soner ';
let iki = 'hendem';
function demo(){
    document.write(bir + iki)
}
demo();


document.write('<hr />' +'Fonksiyon() = FONKSİYONLARIN KAPSAMA ALANI! (fonksiyonlar fonksiyon içerisinden aldığı paramatreleri fonksiyon dışında çağıramaz.) '+'<hr />')

// function demo1(){
//     let birr = 'altunkoy ';
//     let ikii = 'tuğge';
// }
// demo1();
// document.write(birr + ikii +' boş çıktı.')
document.write('fonksiyon çalışmadı.'+ '<br/>')
document.write('değişkenler global bir alandan local biralana(fonksiyon) çağırılabilir..'+ '<br/>')



//------------------------------------------
document.write('<hr />' +'Fonksiyon() = FONKSİYONLARDA RETURN İFADESİ! (RETURN.) '+'<hr />')
function demo2(){
    let name = 'soner'
    let surName = 'hendem'
    return name , surName; // return e 1 adet tanımlanır. en son yazılan çağırıldı.(hendem)
}
let sonuc = demo2();

document.write(sonuc + '<br/>')
//----------------
function demo3(){
    let name = 'soner'
    let surName = 'hendem'
    let coklu = [name,surName];
    return coklu;
}
let sonuc1 = demo3();

document.write(sonuc1 + '<br/>')





// //-------------------------------------
document.write('<hr />' +'Fonksiyon() =Otomatik çalışan fonksiyon'+'<hr />')
// (function oto(){
//     document.write('selamlar');
// })();


document.write('<hr />' +'Fonksiyon() =Parametre tanımlama ve fonksiyonu çağırma.'+'<hr />')


function text(name1){
    document.write('merhaba '+name1+ ' nasılsın iyimisin? '+ '<br/>')
}
text('soner');

function topla(sayi1,sayi2){
let sonuc =sayi1*sayi2;
document.write(sonuc+'<br/>')
}
topla(27,5)
//------------------------------------------
document.write('<hr />' +'Fonksiyon() =fonksiyondaki parametrelere varsayılan değer ataması yapma'+'<hr />')

function test1(tutar,kdv=18){
    let sonuc1 =(tutar/100)*kdv;
    let sonuc2 = tutar+sonuc1;
    document.write('tutar : '+tutar +'<br/>')

    document.write('kd tutarı :'+sonuc1+'<br/>')
    document.write('kd tutarı :'+sonuc2+'<br/>')

    }
    test1(100)//parametre içine virgül yapıp yeni bir aprametre yazarsak yukarda belirtilen 18 iptal olur.



//-------------------------------------
document.write('<hr />' +'Fonksiyon() =otomatik çalışan fonksiyona parametre tanımlama ve fonksiyonu çapırma.'+'<hr />')
let demo4 = function(no1,no2){
    document.write(no1 +'<br/>')
    document.write(no2 +'<br/>')

}('merhaba','nasılsın');
document.write('<hr />' +'Fonksiyon() =otomatik çalışan fonksiyona parametre tanımlama ve fonksiyonu çapırma.'+'<hr />')
let demo24 = function(no1,no2){
    document.write(no1 +'<br/>')
    document.write(no2 +'<br/>')

}('merhaba','nasılsın');document.write('<hr />' +'Fonksiyon() =otomatik çalışan fonksiyona parametre tanımlama ve fonksiyonu çapırma.'+'<hr />')
let demo44 = function(no1,no2){
    document.write(no1 +'<br/>')
    document.write(no2 +'<br/>')

}('merhaba','nasılsın');







//  document.write(names8 + '<br/>')
//  document.write(names8 + '<br/>')
//  document.write(names8 + '<br/>')
//  document.write(names8 + '<br/>')

 
//  document.write(names8 + '<br/>')










// //-------------------------------------
// document.write('<hr />' +'Fonksiyon() = FONKSİYONLARIN KAPSAMA ALANI! Tanımı =    '+'<hr />')

// //  document.write(names8 + '<br/>')

// //-------------------------------------
// document.write('<hr />' +'Fonksiyon() = FONKSİYONLARIN KAPSAMA ALANI! Tanımı =    '+'<hr />')

// //  document.write(names8 + '<br/>')