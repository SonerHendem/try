let names = ["Soner","Tugce","Duygu","muhammed","Nuran"];
document.write(names+'<br />')

//-----------------
document.write('<hr />'+'<hr />')
let fruits =['apple','pear','apricot','cherry'];
let result = fruits;
document.write(fruits +'<br />')
document.write(result +'<br />')

document.write(fruits[0] +'<br />')
document.write(fruits[0] +'<br />')

//---------------------------------------
document.write('<hr />'+'<hr />')
let colors =['black','blue','red',],names2=['soner','tugce','dugu'];
document.write(colors +'<br />')
document.write(colors[0] +'<br />')
document.write(colors[1] +'<br />')
document.write(colors[2] +'<br />')

document.write(names2 +'<br />')
document.write(names2[0] +'<br />')
document.write(names2[1] +'<br />')
document.write(names2[2] +'<br />')

//---------------
document.write('<hr />'+'<hr />')
//const names3=  ['soner','ibo','nuran']; //const ile değişken oluşturulamaz!
let names3=  ['soner','ibo','nuran']; //let ve var ile oluşturulur!
document.write(names3 +'<br />')
document.write(names3[0] +'<br />')
document.write(names3[1] +'<br />')
document.write(names3[2] +'<br />')
//-----------------------------------------
document.write('<hr />'+'<hr />')
let ornek =['hakan','pelin','selin']
document.write(names3 +'<br />')
document.write(ornek[0] +'<br />')
document.write(ornek[1] +'<br />')
document.write(ornek[2] +'<br />')

//----------------------------
document.write('<hr />'+'<hr />')
let deneme='javascript';
document.write(deneme[0] +'<br />')
document.write(deneme[1] +'<br />')
document.write(deneme[2] +'<br />')
document.write(deneme[3] +'<br />')
document.write(deneme[4] +'<br />')
document.write(deneme[5] +'<br />')
document.write(deneme[6] +'<br />')
document.write(deneme[7] +'<br />')
document.write(deneme[8] +'<br />')
document.write(deneme[9] +'<br />')

//--------------------------------------
document.write('<hr />'+'<hr />') 
let days = new Array(7);
    days[0]  ='pazartesi';
    days[1]  ='salı';
    days[2]  ='çarşamba';
    days[3]  ='perşembe';
    days[4]  ='cuma';
    days[5]  ='cumartesi';
    days[6]  ='pazar';
document.write(days    + '<br/>')
document.write(days[0] + '<br/>')
document.write(days[1] + '<br/>')
document.write(days[2] + '<br/>')
document.write(days[3] + '<br/>')
document.write(days[4] + '<br/>')
document.write(days[5] + '<br/>')
document.write(days[6] + '<br/>')


//--------------------------- çok boyutlu dizi. DİZİ İÇİNDE DİZİ TOPLAM 3 DİZİ İSTEDİĞİMİZ KADAR YAPABİLİRİZ.
document.write('<hr />'+'<hr />') 
// let names_ =new Array('soner','hendem',new Array ('selim','duru','yagız'),'helin','gulce')

let names_ =['soner','hendem',['selim','duru','yagız',["tuğla",'alçı'],'hatice'],'helin','gulce']
document.write(names_[0] + '<br/>')
document.write(names_[1] + '<br/>')
document.write(names_[2][0] + '<br/>')
document.write(names_[2][1] + '<br/>')
document.write(names_[2][2] + '<br/>')

document.write(names_[2][3][0] + '<br/>')
document.write(names_[2][3][1] + '<br/>')

document.write(names_[2][4]+ '<br/>')

document.write(names_[3] + '<br/>')
document.write(names_[4] + '<br/>')

//----------------------------------------------
document.write('<hr />' +'DEĞİŞKEN OLARAK ÇOK BOYUTLU DİZİLER!'+'<hr />') 
let color= ['red','blue','orange','pink']
let number =['bir','iki','üç']
let sonuc= [color,number]
document.write(sonuc + '<br/>')
document.write(sonuc[0] + '<br/>')
document.write(sonuc[1] + '<br/>')
document.write(sonuc[0][0] + '<br/>')
document.write(sonuc[0][1] + '<br/>')
document.write(sonuc[0][2] + '<br/>')
document.write(sonuc[0][3] + '<br/>')
document.write(sonuc[1][0] + '<br/>')
document.write(sonuc[1][1] + '<br/>')
document.write(sonuc[1][2] + '<br/>')

//-----------------------------------------------
document.write('<hr />' +'DEĞİŞKENİN DİZİ OLUP OLMADIĞINI KONTROL ETMEK TRUE/FALSE!'+'<hr />') 
 let result1 ='javascitip güzeldir'
 let result2 =['javascitip',' güzeldir','ikinci :)'];
 
 let sonuc1 =Array.isArray(result1)
 let sonuc2 =Array.isArray(result2)
 document.write(sonuc1+ '<br/>')
 document.write(sonuc2+ '<br/>')

 //----------------
document.write('<hr />' +'DEĞİŞKENLERİ DİZİ GİBİ GÖSTEREREK FON İN DÖNGÜSÜ KULLANIMI.!'+'<hr />') 
let metin ='javaS';
document.write(metin + '<br/>')
let sonucu;
for(sonucu in metin){
    document.write(metin[sonucu] +'<br/>')
}

//-------------------------------------
document.write('<hr />' +'DİZİLERDE FOR in DÖNGÜSÜ KULLANIMI.!'+'<hr />') 
let color1=['siyah','mavi','pembe']
document.write(color1 + '<br/>')
document.write(color1[0] + '<br/>')
document.write(color1[1] + '<br/>')
document.write(color1[2] + '<br/><br/><br/>')

let sonuclar;
for(sonuclar in color1){
    if(sonuclar>=0 && sonuclar<=1){//index değeri 0ve 1 arasında olan değerleri sever.!!
    document.write('bu rengi severim = '+color1[sonuclar] + '<br/>')}else{
        document.write('bnu renkleri sevmiyorum = ' + color1[sonuclar] + '<br/>')
    }
}
//------------------------------------
document.write('<hr />' +'İÇ İÇE DİZİLERDE FON İN DÖNGÜSÜ.!'+'<hr />') 
let description=['soner','hasan','yaren','tugce',['huseyin','nuran','ibrahim',['mor','turuncu','haki'],'sevure',],'duygu','emre','hasan'];

document.write(description + '<br/>')

let sonuc4;
for(sonuc4 in  description){
    if(Array.isArray(description[sonuc4])){
        let firtCheck;
        for(firtCheck in description[sonuc4]){
            if(Array.isArray(description[sonuc4][firtCheck])){
                let lastCheck;
                for(lastCheck in description[sonuc4][firtCheck]){
                    document.write(description[sonuc4][firtCheck][lastCheck] + '<br/>');
                }
            }else{
                document.write(description[sonuc4][firtCheck] + '<br/>')

            }
        }
    }else{
     document.write(description[sonuc4] + '<br/>')

    }
}
//----------------------------------------------
document.write('<hr />' +' .ok boyutlu dizinin uzunluğunu lenght ile döndürme..!'+'<hr />') 
let color3 = ['black','red','yellow',['blue','pinkkkk','purple'],'orange','handmade']
document.write(color3 + '<br/>')
let  operation = color3.length;
document.write('dizinin eleman sayısı = ' + operation + '<br/>')
let  operation1 = color3[3].length;
document.write('alt dizinin eleman sayısı = ' + operation1 + '<br/>')
let  operation2 = color3[3][1].length;
document.write('alt dizinin elemanın harf sayısı = ' + operation2 + '<br/>')


//---------------------------------------------------
document.write('<hr />' +' DELETE METHOD (belirtilen elemanları siler)!'+'<hr />') 
let belongings =['key','mause','TV','pen','paper']
delete belongings[1] //mause delete
document.write(belongings + '<br/>')

//-----------------------------
document.write('<hr />' +' pop() METHOD!   (dizinin son elamanını siler.)'+'<hr />') 
let belongings1 =['monitor','speaker','leptop','window','table']
document.write(belongings1 + '<br/>')
let rusult3 = belongings1.pop();
document.write(belongings1 + '<br/>')


//-------------------------------------
document.write('<hr />' +' shift() METHOD!   (dizinin ilk elamanını siler.)'+'<hr />') 


let names5 = ['soner','aysel','hacer','fatme']
document.write('dizinin ilk hali : '+names5  + '<br/>')
let result4= names5.shift()
document.write('dizinin silinen elemanı : '+result4 + '<br/>')

document.write('dizinin son hali : '+names5 + '<br/>')

//-------------------------------------
document.write('<hr />' +' push() METHOD!   (dizinin ilk elamanını siler.)'+'<hr />') 

let fruits1 =['apple','pear','apricot','cherry'];

document.write(fruits1 + '<br/>')
let result56 = fruits1.push('pineapple') 

document.write(fruits1 + '<br/>')

//-------------------------------------
document.write('<hr />' +' unshift() METHOD!   (dizinin başına eleman veya elemanalr ekler..)'+'<hr />') 

 
let vegatables = ['spinach','chard','lettuce','leek']

document.write(vegatables + '<br/>')
let result5 = vegatables.unshift('parsley' ,'celery');
document.write(vegatables + '<br/>')
document.write('diznin eleman sayısı : '+result5 + '<br/>')

//-------------------------------------
document.write('<hr />' +' splice() METHOD!   (dizinin başına eleman veya elemanalr ekler veya siler. sildiği elemanları geri döndürür.)'+'<hr />') 
let vegatables1 = ['parsley','celery','spinach','chard','lettuce','leek']
document.write(vegatables1 + '<br/>')
let result6 = vegatables1.splice(1,2); //1 numaradan başla 2 adet eleman sil.
document.write(vegatables1 + '<br/>')
document.write('silinen elemanlar = ' + result6 + '<br/>')
let result8 = vegatables1.splice(1,0 ,'domates','patates'); //1 numaradan başla 2 adet eleman sil.
document.write(vegatables1 + '<br/>')
// document.write('eklenen elemanlar = ' + result8 + '<br/>')





//--------------------------------------------
document.write('<hr />' +' slice() METHOD!   (dizide verilen parametreler arasındaki değerleri alıp yeni bir dizi oluşturur.)'+'<hr />') 
let color4 = ['black','red','yellow','blue','pinkkkk','purple','orange','handmade']
document.write(color4 + '<br/>')
let newcolor = color4.slice(1,4)
document.write(newcolor + '<br/>')


//--------------------------------------------
document.write('<hr />' +' copyWithin() METHOD!(verilen paramatreler arasındaki dizi elemanalrının değiştirir ve değeri geri döndrürr.)(d.)'+'<hr />')

let names4 =['soner','hendem','selim','duru','yagız',"tuğla",'alçı','hatice','helin','gulce']
document.write(names4 + '<br/>')
names4.copyWithin(1, 3, 5); // 3ve 5 in arasındaki parametreleri siler 1. parametreden itibaren yazar.
//1. parametre hedef /2. parametde başlangıç / 3. parametre bitiş.
document.write(names4 + '<br/>')




//--------------------------------------------
document.write('<hr />' +' fill() METHOD!( verilen parametreler arasındaki değerleri siler verilen değeri oraya yazar..)(d.)'+'<hr />')
let vegatables2 = ['parsley','celery','spinach','chard','lettuce','leek']
vegatables2.fill('karnıbahar',1,3)//parametre belirtilmezsse tüm değerler karnıbahar olur.   değer/başlangıç/bitiş
document.write(vegatables2 + '<br/>')


//--------------------------------------------
document.write('<hr />' +' concat() METHOD!( birleştirme metodudur dizileri veya elemanları  dahil ederek yeni bir dizi oluşturur. )'+'<hr />')
let man = ['soner','burak','yasin','halil']
let woman =['dugu','nuran','hacer','tuğçe']

document.write(man + '<br/>')//1. dizi

document.write(woman + '<br/>')//2. dizi
let names6 = man.concat(woman)// birden fazla dizi birleştirile bilir. virgün yardımın ile örnek => man.concat(woman, renkler, sehirler)  4 diziyi birleştirmiş olduk.
document.write(names6 + '<br/>')


//-------------------------------------
document.write('<hr />' +'join() METHOD!   (tanımlanan diziyi düz bir metin e çevirir işlem gören dizinin sonucu artık dizi değildir. ve değeri geriye döndürür '+'<hr />')

let colors1 =['sar','pembe','turuncu','mor']
let check1 = Array.isArray(colors1)
document.write('('+check1+')'+colors1 + '<br/>')

let result7 =colors1.join()
let check2 = Array.isArray(result7)
document.write('('+check2+')'+result7 + '<br/>') 



//--------------------------------------------
document.write('<hr />' +' toString() METHOD!   (tanımlanan diziyi string bir metin haline çevirir ve düz bir metin oluşturur değeri geriye döndürür )'+'<hr />')
let names7 = ['soner','tugce','duygu','nuran','ibrahim']
document.write(names7 + '<br/>')
let nameCheck = typeof names7;
document.write(nameCheck + '<br/>')


let result9 = names7.toString();
document.write(result9 + '<br/>')
let nameCheck1 = typeof result9;
document.write(nameCheck1 + '<br/>')



//--------------------------------------------
document.write('<hr />' +' valueOf() METHOD!   (üzerinde çalışılan dizi değerini tam anlamıyla aktarım sağlıyarak yeni bir dizi oluşturur oluşturduğu diziyi geri döndürür. )'+'<hr />')
let names8 = ['soner','tuğce','nuran','ibrahim']
document.write(names8 + '<br/>')

let newNames = names8.valueOf();// diziyi tam anlamıyla kopyalar yeni bir diiz oluşturur dizinin üzerinde sonradan yapılacak değişiklkler olursa algılar ve düzeltme yapar.
document.write(newNames + '<br/>')

names8.fill('volkan');
document.write(names8 + '<br/>')
document.write(newNames + '<br/>')// newNames değişkenş fiil() metodu ile yapılan değişiklikten etkilenip değişiklikleri beniimsedi ve değişim sağladı.





//-------------------------------------
document.write('<hr />' +'indexOf() METHOD! ( dizi içerisindeki paramerik olarak verilen değeri arar ve ilk eşleşmeyi sağlayan elemaın index değerini geriye döndürür) '+'<hr />')
let names9 = ['soner','duygu','hacer','asım','emre']

document.write(names9 + '<br/>')

let result10 = names9.indexOf('duygu')


document.write(result10 + '<br/>') ///sonuc duygu duygu ismi 2 adet olsaydı ilk eşleşen değerin idex değerini verecekti.





//-------------------------------------
document.write('<hr />' +'lastIndexOf() METHOD! Tanımı = dizi içerisinde parametrik verilen değeri arar ve son eşleşmeyi sağlayan dizi elamanının index değerini geriye döndürü '+'<hr />')
let colors2 = ['black','purple','green','orange','pink']
document.write(colors2 + '<br/>')

let result11 = colors2.lastIndexOf('orange');
document.write(result11 + '<br/>')


//-------------------------------------
document.write('<hr />' +'find() METHOD! Tanımı = Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerine tek tek olmak üzere çalıştırır ve dizi içerisinde parametrik olarak verilen değeri arar. ve ilk eşleşmeyi geriye döndürü. '+'<hr />')

// function deneme(eleman,sira, referans){
//  return sira == 3;
// }


// let numbers =[1,2,3,4,5,6,7,]
// document.write(numbers + '<br/>')

// let result12 = numbers.find(deneme);


// document.write(result12 + '<br/>')



//-------------------------------------
document.write('<hr />' +'indexOf() METHOD! Tanımı = Kendisine parametre olarak verilen fonksşyonu dizideki her eleman olmak üzere tek tek çalıştırır. ve dizi içerisinde parametrik olarak verilen değeri arar ilk eşleşmeyi sağlayan dizi elemanın index değerini geriye dönrürür '+'<hr />')
// 1. her işlemde elde edilen dizi elemanı
// 2. her işlemde elde edilen dizi elemanının index değeri
// 3. her tekrarda diziyi tutand eğerin referansı.
function denemeler(eleman,sira,referans){
 return eleman == 'leptop'; // 2 numaralı index değeri
 
}

let belongings2 =['monitor','speaker','leptop','window','table']
document.write(belongings2 + '<br/>')

let result13 = belongings2.findIndex(denemeler);
document.write(result13 + '<br/>')



//-------------------------------------
document.write('<hr />' +'reduce() METHOD! Tanımı =Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde soldan sağa tek tek olmak üzere çalıştırır ve tek bir değer oluştyrarak oluşturduğu değeri geriye döndürü.    '+'<hr />')
// 1. Parametre = dizi içerinde mevcut değer öncesindeki değerlerin toplamı/birleşimi.
// 2. Parametre = her işlemde elde edilen dizi elemanı
// 3. Parametre = her işlemde elde edilen dizi elemanının index değeri.
// 4. Parametre = her tekrarda diziyi tutan değişkenin referansı.
function deneme1(deger,eleman1,sira1,degisken){
//    document.write(deger + '<br/>') // değerleri yazar ve birbiri ile toplar 1. parametre kuralı
//     document.write(eleman1 + '<br/>') // elemanları yazar 100,200,300,400,500 2. parametre kuralı
//     document.write(sira1 + '<br/>') // index numaralarını yaar 0,1,2,3,4   3. parametre kuralı
//     document.write(degisken + '<br/>') // parametreleri yazar 100,200,300,400,500 4. parametre kuralı.
 
    return deger+eleman1; // verilen değerleri topladık. son elemanı almadıgı için +1 eleman yaptık.
}

let numbers1 = [100,200,300,400,500]

document.write(numbers1 + '<br/>')

let result14 = numbers1.reduce(deneme1)
document.write(result14 + '<br/>')


//-------------------------------------
document.write('<hr />' +'reduceRight() METHOD! Tanımı =Kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde sağdan sola tek tek olmak üzere çalıştırır ve tek bir değer oluştyrarak oluşturduğu değeri geriye döndürü'+'<hr />')
// reduce deki büütün kurallar burdada geçerli.



//-------------------------------------
document.write('<hr />' +'reverse() METHOD! Tanımı =dizi içerisindeki sıralamayı tersine çevirir[1,2,3]=[3,2,1] ve sonucu geriye döndürür.'+'<hr />')
let fruits2 =['apple','pear',['banana','starbery'],'apricot','cherry']; // çok boyutlu dizilerde  boyutun içindeki dizi elemanlarını ters çvirmez!

document.write(fruits2 + '<br/>')

let newFruits = fruits2.reverse();
document.write(newFruits + '<br/>')



//-------------------------------------
document.write('<hr />' +'sort() METHOD! Tanımı = dizi içeriğinin sıralanmasını sağlar motod unicode(evrensel kod) olarak çalışır   '+'<hr />')
let names10 = ['soner','duygu','nuran','ibrahim']
document.write(names10 + '<br/>')
names10.sort();
document.write(names10 + '<br/>')//duygu ibrahişm nuran soner olarak yazar a-z arası sıralar


let numbers2 = [1,3,5,10.2,8.3,4,44,77,100,110]
document.write(numbers2 + '<br/>')
numbers2.sort();
document.write(numbers2 + '<br/>') //1,10.2,100,110,3,4,44,5,77,8.3  = 1-2-3 basamaklar 0 a en yakın olan basamakları seçerek sıralar ve .(nokta ) olan sayıları en başta sıralar

let mix = [10,1.2,55,'soner','duygu',88,10.2,'nuran',99,101,210,'ibrahim',44]
document.write(mix + '<br/>')

mix.sort();
document.write(mix +'  = sort() metod kullanılan karışık dizide rakamlar öncelikli olarak sıralanır.'+'<br/>')







//-------------------------------------
document.write('<hr />' +'forEach() METHOD! Tanımı =kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerine tek tek çalıştır ve geriye herhangi bir değer döndürmez.    faket istenirse ilgili değerlere erişilebilir. '+'<hr />')
//1. parametre = HER İŞLEMDE ELDE EDİLENDİZİ ELEMANI
//1. parametre = HER İŞLEMDE ELDE EDİLEN DİZİ ELEMANININ İNDEX'İ
//1. parametre = TEKRARLAMA İŞLEMİ İÇİN DİZİNİN ATANDIĞI DEĞİŞKEN REFERANSI
function result15(eleman2,sira2,degisken2){//otomatik gelen değişkenler akılda kolay kalması için 1.2.3 kural
    sonuc5 += eleman2 // dizinin her elemanını birbiriyle toplar
    
}
let sonuc5 = 0;
let numbers3 = [ 2,4,6,8,10,12,14,16,18,20]
document.write(numbers3 + '<br/>')

numbers3.forEach(result15)

document.write(sonuc5+ '<br/>')






//-------------------------------------
document.write('<hr />' +'some() METHOD! Tanımı = kendisine parametre olarak belirtilen fonksiyon true değeri döndürene kadar. dizi elemanları üzerinde sıra ile gezinilmesini sağlar.   '+'<hr />')
//1. parametre => her işlemde elde edilen dizi elemanı  
//1. parametre => her işlemde elde edilen dizi elemanının index değeri.
//1. parametre => her tekrarlama işleminde diziyi tutan değişkeninreferansı.
function numbers_4(eleman,sira,degisken){
    sonuc_1 =eleman;
    return eleman % 5==0;
}

let sonuc_1 = 0;
let  numbers4 = [ 16,23,65,32,33,19]
document.write(numbers4 + '<br/>')

numbers4.some(numbers_4)
document.write(sonuc_1 + '<br/>')

//-------------------------------------
document.write('<hr />' +'every() METHOD! Tanımı =kendisine parametre olarak verilen fonksiyon false değeri döndürene kadar dizi elemanları üzerinde gezilmesini sağlar.'+'<hr />')
//1. parametre => her işlemde elde edilen dizi elemanı  
//1. parametre => her işlemde elde edilen dizi elemanının index değeri.
//1. parametre => her tekrarlama işleminde diziyi tutan değişkeninreferansı.
function result16(eleman,sira,degisken){
 result_ =eleman;
 return eleman % 5 ==0;
}
let result_ = '';
let number5 = [100,55,44,700,400,1,25,33,343,55,89,47] // gelen ilk sonuç yazdırılır sonuc :
document.write(number5 + '<br/>')
number5.every(result16);
document.write('gelen ilk sonuç: '+result_ + '<br/>')



//-------------------------------------
document.write('<hr />' +'filter() METHOD! Tanımı =kendisine parametre olark verilen fonksiyonu dizideki her eleman üzerinde çalıştırır. fonksiyonun geriye true değerini döndüren tüm elemanalrını kopyalıyarak yeni bir dizi oluşturur oluşturduğu diziyi geriye döndürür.'+'<hr />')
//1. parametre => her işlemde elde edilen dizi elemanı  
//2. parametre => her işlemde elde edilen dizi elemanının index değeri.
//3. parametre => her tekrarlama işleminde diziyi tutan değişkeninreferansı.
function search(eleman,sira,degisken){
    // return eleman %2 !==0;  // tek sayı döndürür 
    return eleman.length>=6; // elemanların karakteri 6 dan büyük olanları çağır.
}
// let number6 = [1,2,3,4,5,6,7,8,9,10]
let number6 = ['turkey','germany','england','jordan','usa','china','newzeland','holand','rusia','korea']
document.write(number6 + '<br/>')

let oddNumber = number6.filter(search) // fonksiyonu çağır.
document.write(oddNumber + '<br/>')


//-------------------------------------
document.write('<hr />' +'map() METHOD! Tanımı =kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde çalıştırır. fonksiyonu her eleman için geriye döndürdüğü değerlerden yeni bir dizi oluştutur ve yeni dizi değerini geriye döndürür.'+'<hr />')
//1. parametre => her işlemde elde edilen dizi elemanı  
//2. parametre => her işlemde elde edilen dizi elemanının index değeri.
//3. parametre => her tekrarlama işleminde diziyi tutan değişkeninreferansı.

function sample(eleman,sira,degisken){
    let result17 = eleman *100;    
    return result17;
}
let number7 = [1,2,3,4,5,6,7,8,9,10]

document.write(number7+ '<br/>')
let newMap = number7.map(sample);
document.write(newMap+ '<br/>')

//-------------------------------------
// not = diziye etki ettiğimiz için Array. yazdık.
Array.prototype.avarage = function(){
    let result17 = 0 ;
    for(let i = 0; i<this.length; i++){
        result17 += this[i];
    }
    let sonuc3 = result17/this.length;
    return sonuc3;
}
document.write('<hr />' +'avarage() METHOD! Tanımı = number (sayi) veri türü içerikli dizini her elemanıüzerinde tek tek olmak üzere çalışır ve tüm elemanların ortalamasını bularak buldugu değeri geriye dönrür.    '+'<hr />')
let number8 = [10,20,30,40,50,60,70,80,90,100]
document.write(number8 + '<br/>')
let avarage1 = number8.avarage() 
document.write(avarage1 + '<br/>')

//-------------------------------------
document.write('<hr />' +'suffle() METHOD! Tanımı =  dizinin her elemanı üzerinde tek tek çalışarak tüm elemanları karıştırır ve yeni bir dizi oluşturur oluşturduğu değeri geriye döndürür.  '+'<hr />')
Array.prototype.shuffle = function(){ // not dizinin prototipine ulaş ve shuffle metodunu kullan.
    let numberOfElements = this.length;
    while(--numberOfElements >0){
        let randomNumber = Math.floor(Math.random()*(numberOfElements + 1));
        let gecicideger = this[randomNumber];
        this[randomNumber] = this[numberOfElements];
        this[numberOfElements] = gecicideger;
        return this;
    }
}


let contents = ['A','B','C','D','E']
document.write(contents + '<br/>')
let mix1 = contents.shuffle();
document.write(mix1 + '<br/>')


//-------------------------------------
//  document.write('<hr />' +'indexOf() METHOD! Tanımı =    '+'<hr />')

//  document.write(names8 + '<br/>')

