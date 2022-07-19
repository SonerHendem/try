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


