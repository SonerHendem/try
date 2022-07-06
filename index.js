//selamlar burada kodlarımı oluşturacağım.
//2. değişikliğim.
//selam değişiklik.
function numara(num){
console.log(num*num)
}
numara(3)
 

//---------------------------------
function greetings2(firtsName, lastName){
    let info =`hello ${firtsName} ${lastName}`
    return info
}
let greetingsInfo =greetings2("Ad","Soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id,info){
    let domObject =document.querySelector(`#${id}`)
    domObject.innerHTML=info
}
let htmlInfo =`<span style="color:red"> color red :) </span>`
domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo("info" ,greetings2("soner","hendem"))