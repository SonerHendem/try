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
vegatables2.fill('karnıbahar',1,3)
document.write(vegatables2 + '<br/>')
