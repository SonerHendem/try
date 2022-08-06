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




//------------------------------------------------
document.write('<hr />' +'Fonksiyon(ÖNEMLİ!!!!) =Fonksiyondan başkar bir fonksiyona değer döndürme. '+'<hr />')
function paraBirimi(birim,tutar){
    if(birim=='Türk Lirası'){
        var kur =1;
    }else if(birim=='Amerikan Doları'){
        var kur =3;// kurları let ile tanımlıyamadık sadece var ile tanımlandı.
    }else if(birim =='Eruo'){
        var kur=4;
    }
   return tutarHesapla(kur,tutar);
}

function tutarHesapla(gelenkur,gelentutar){
    let hesapYap = gelenkur * gelentutar;
    document.write(hesapYap +'<br/>')

}
paraBirimi('Amerikan Doları',100);




document.write('<hr />' +'Fonksiyon() = çok boyutlun fonksiyonlarla iç içe çalışma.'+'<hr />')

function deneme(voi1,voi2){

    function test1(son1,son2){
        document.write(son1 +'<br/>')
        document.write(son2 +'<br/>')

    }
    return test1(voi1,voi2);
}
deneme(3,6);







document.write('<hr />' +'Fonksiyon() = ,ç içe çok boyutlu fonskiynlarda parametre tanımlama ve fonksiyonu çağırma.'+'<hr />')
function birr(a1,a2){
    function iki(b1,b2){
        function uc(c1,c2){
            return a1+a2+b1+b2+c1+c2;
        }
        return uc;
    }
    return iki;
}
let sonuc3 = birr(5,7)(10,7)(8,4)//1. parametre 5 /2.10/3.8
// let deg1 = 5;
// let deg2 = 6; 
// let deg3 = 21;
// let sonuc4 = bir(deg1)(deg2)(deg3); sonuc 3 yerinde değişken oluşturup ta verileri alabiliriz.
document.write(sonuc3+'<br/>')


//---------------------------------------------------------

document.write('<hr />' +'Fonksiyon() =iç içe çok boyutlu fonksiyonlarda parametre tanımlama ve çapı'+'<hr />')
function birrr(aaa){
    function ikii(bbb){
        function ucc(ccc){
            function dortt(ddd){
                let sonuc5 =aaa+bbb+ccc+ddd;
                document.write(sonuc5+'<br/>')
    
            }
            dortt(3);
          
        }
        ucc(7);
    }
    ikii(3);
}
birrr(7);

//--------------------------------------------

document.write('<hr />' +'Fonksiyon() =iç içe çok boyutlu fonksiyonlarda alt fonksiyonda parametre değerini alma ve çağırma '+'<hr />')
function demobir(deger){
    function test2(){
        function test3(){
            document.write(deger+'<br/>')

        }
        return test3();

    }
    return test2();
}
demobir('soner hendem');

//----------------------------------------
// document.write('<hr />' +'Fonksiyon() =kendi kendini çağıran fonksiyon'+'<hr />')
// function soner(a,b){
//     let sonuc12 =a*b;
//     document.write(sonuc12)
// }
// soner(12,7)






//--------------------------------------------------------

document.write('<hr />' +'Fonksiyon() =fonksiyonlarda length özelliği.'+'<hr />')
function ornk (name,surName1,city,yas){
    let result = ornk.length;
    document.write(result)
}
ornk('soner','hendem','istanbul',26)



//--------------------------------------

document.write('<hr />' +'Fonksiyon(ÖNEMLİ!!) = fonksiyonlarda arguments özelliği kullanımı (fonksiyona herhangi bir parametre tanımlanmadan bile gelebilecek tüm parametre değerlerinin alınmasını sağlar.)'+'<hr />')
function ornk1(){
    for(let i=0; i<arguments.length; i++){
        document.write(arguments[i]+'<br/>');
    }
}
ornk1('soner','hendem')
function ornk2(){
    for(let i=0; i<arguments.length; i++){
        document.write(arguments[i]+'<br/>');
    }
}
ornk2('soner','hendem','istanbul',26)



//-----------------------------------------------
document.write('<hr />' +'Fonksiyon(ÖNEMLİ!!) = caller = fonksiyonu çağıran diğer bir fonksiyon referans olarak alınarak tğm bilgilerinin elde edilmesini sağlar.      '+'<hr />')
function esas(){
    for(let i=0; i<esas.caller.arguments.length; i++){
        document.write(diger.arguments[i]+'<br/>');
    }
}
function diger(name2,surName2){
   esas() 
}
diger('soner','hendem')



//---------------------------------------------
document.write('<hr />' +'Fonksiyon(ÖNEMLİ!!) = return = fonksiyonda return ifadesi içerisinde fonksiyon tanımlama ve fonskyisonu çağırma.      '+'<hr />')
let person = function(){
    let result = 'soner hendem';
    return{
        bringName:function(){
            return result;
        }
    }
}();
let sonuc6 = person.bringName();
document.write(sonuc6)
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