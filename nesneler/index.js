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




//  document.write(   + '<br/>')

//------------------------------------
document.write-(' <br/>'+' <br/>'+'<hr />' +' NESNELER =hello world!  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')

//-------------------------------------
document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//document.write(   + '<br/>')

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

//-------------------------------------
// document.write(' <br/>'+' <br/>'+'<hr />' +' NESNELER =   !  '+'<hr />')

//  document.write(   + '<br/>')


