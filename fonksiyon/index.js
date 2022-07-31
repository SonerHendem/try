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