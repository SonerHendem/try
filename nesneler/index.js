document.write('<hr />' +'NESNELER = NESNE TANIMLAMA '+'<hr />')
let information = {name:'soner',surName:'hendem',birthDay:1997};
let personName = information.name;
let personSurName = information.surName;
let personBirthDay = information.birthDay;

document.write(' benim adım : '+personName + ' soy adım : '+personSurName+' benim yaşım : '+personBirthDay+ '<br/>')


//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =NEW OPERATÖRÜ KULLANMA VE NESNEYİ ÇAĞIRMA!  '+'<hr />')

let information1 = new Object();
information1.name = 'sonerr';
information1.surName = 'hendemm';
information1.birthDay = 1998;

let nameRender = information1.name;
let surNameRender = information1.surName;
let birthDayRender = information1.birthDay;


document.write( 'name render : '+nameRender +  '<br/>')
document.write( 'sur name  render : '+ surNameRender  +' <br/>')
document.write( 'birth day render : '+birthDayRender+ '<br/>')





//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER = Fonksiyon şeklinde nesne oluşturma.!  '+'<hr />')
function deneme(){
    this.name = 'soner'
    this.surName = 'soner'
    this.age = 26;

}
let information2 = new deneme();
document.write(information2.surName+ '<br/>')



//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Nesnelerde değer ve özelliklerde tırnak işareti kullanımı.!  '+'<hr />')
let information3 = {'name':'soner',"surName":'hendem',birthDay:1997};// tek tırnakal başlıyorsa tek tırnakla biticek.

document.write( information3.name  + '<br/>')
document.write( information3.surName  + '<br/>')
document.write( information3.birthDay  + '<br/>')




//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Tekbir ifadeye birden fala nesne tanımlamak.   !  '+'<hr />')

let information4 = {'name':'soner',"surName":'hendem',birthDay:1997},information5 = {'name':'hakan',"surName":'berber',birthDay:1997};
let name = information4.name
let surName = information4.surName

let name1 = information5.name
let surName1 = information5.surName
document.write( name1  + '<br/>')

document.write( surName + '<br/>')



//------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Bir neseneyi başka bir değişkene aktarmak.!  '+'<hr />')

let information6 = {'name':'tugce',"surName":'nuran',birthDay:1997};
let ornek = information6;

let name2 = ornek.name;
let surName2 = ornek.surName;

document.write(name2+ '<br/>')
document.write( surName2  + '<br/>')

//------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =nesneyi önceden belirleyip sonradan değer tanımlamak!  '+'<hr />')
let information7 = {};
information7.name = 'soner';
information7.surName = 'hendem';

let nameSurName = information7.name + information7.surName;
document.write(  nameSurName + '<br/>')

//------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =nesneyi dizi olarak görererek herhangi bir özelliğin değerine ulaşmak  '+'<hr />')
let information8 = {name : "soner",surName:'hendem'};
let whatName =information8.name;
let whatSurName =information8.surName;
document.write( whatName+' '+whatSurName  + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER = nesne içerisinedki bir özelliğe ait değerin değiştirilmesi  !  '+'<hr />')
information9 = {name :'soner',surName:'hendem',ders:'javascript'};
// ÖNEMLİ NOT:
// let dersss = information9.ders; == bu şekilde bir depolama yapsaydık 'javascript' değeri 'PHP' DEĞERİ İLE DEĞİŞTİRİLEMEZDİ.
information9.ders = 'PHP';
document.write('kullanıcı : '+information9.name +' '+information9.surName +'<br/>'+' alınan eğitim :'+information9.ders   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Nesne içerisinde fonksiyon tanımlama ve çağırma.   !  '+'<hr />')
let information10 = {
    name : 'soner', 
    surName: 'hendem', 
    uyari: function(){
        document.write('ben nesne içi fonksiyon koduyum.')
    }
}
information10.uyari();
//document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Nesne içerisinde fonksiyon nesnenin özellik değerlerine fonksiyon içerisinden ulaşma!  '+'<hr />')
let information11 = {
    name: 'soner',
    surName: 'hendem',
    detay: function(){
        let nameValue = information11.name;
        let surNameValue = information11.surName;
        document.write(nameValue+' '+surNameValue+ '<br/>')

    }
};
information11.detay();
//  document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Nesne içerisinde fonksiyon fonksiyon içerisinde de özellik ve değer tanımlama ve çağırma!  '+'<hr />')
let information12 = {
    name: 'soner',
    surName: 'hendem',
    detay:function(){
        this.age = '26';
        this.job = 'web developer'
    }
}
let writeName =information12.name;
let writeSurName =information12.surName;

information12.detay(); // fonksiyonu çağırmasaydık age,job verisine ulaşamazdık.
let writeAge =information12.age;
let writeJob =information12.job;


document.write('Name :'+ writeName + '<br/>')
document.write('Surname :'+ whatSurName + '<br/>')
document.write('AGE :'+ writeAge + '<br/>')
document.write('Job :'+ writeJob + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Nesne içerisindeki fonksiyonda return ifadesi kullanımı. !  '+'<hr />')
let information13 = {
    detay: function(){
        let name ='soner';
        let surName = 'hendem';
        let result = name +' '+surName;
        return result;
    }
}
let nameValue1 = information13.detay();
document.write( nameValue1  + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =Nesnelerin Kapsama alanı.   !  '+'<hr />')
let information14 = {
    name:'soner',
    surName:'hendem',
    tarih:1996,
    detay:function(){
        let ifade = 'merhaba'
        document.write(ifade + '<br/>')
    }
}
let information15 = {
    name:'tolunay',
    surName:'berber',
    tarih:1997,
    detay:function(){
        let ifade = 'selam';
        document.write(ifade + '<br/>')

    }
}
let name14 = information14.name;
let tarih14 = information14.tarih;

let name15 = information15.name;
let tarih15 = information15.tarih;
document.write(name14 +' '+tarih14   + '<br/>')
information14.detay();
document.write( name15 +' '+tarih15  + '<br/>')
information15.detay(); 



//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =  Özeliik ve değerleri tanımlanmış bir nesneye daha sonradan ek özellik ve değerler tanımlama !  '+'<hr />')
let information16 = {
    name:'soner',
    surName:'hendem',
    birthDay:1996
};
let name16 = information16.name;
let surName16 = information16.surName;
let birthDay16 = information16.birthDay;
document.write( name16  + '<br/>')
document.write( surName16  + '<br/>')
document.write( birthDay16  + '<br/>')


information16.city ='istanbul';
information16.job = 'developer';
let city16 = information16.city;
let job16 = information16.job;
document.write(city16   + '<br/>')
document.write( job16  + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =nesne içerisindeki fonksiyona paramatre tanımlama ve fonksiyon çağırma!  '+'<hr />')
let information17 = {
    value:function(name,surName,age){
        let nameValue = name;
        let surNameValue = surName;
        let ageValue = age;
        let paragraf = 'merhaba benim adım '+nameValue+' '+surNameValue+' yaşım : '+ageValue
        return paragraf;
    }
}
let result17= information17.value('soner','hendem','26')
document.write(result17   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER = heyy!! guncel  !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =  nesnee! !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER = guncel  !  '+'<hr />')
let guncel ={ soner :'hendem'}
//  document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')


