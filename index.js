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
//-----------------------------------------------------------------------
function bmi(weight, height) {
    const result = weight/(height*height) 
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    } 
}
  let weight =90;
  let height =1.80;
  console.log(bmi(weight,height)) 
  console.log(bmi(40,height)) 
  console.log(bmi(70,height)) 
  console.log(bmi(100,height)) 
//----------------------------------------------------
  // function findSmallestInt(args) {
  //   const deger= Math.min(...args);
  //   for(let i=0; i>x.length; i++){
  //     return deger
  //   }
  // }
  // const x= [34, 15, 88, 2];
  // console.log(findSmallestInt(deger))

//--------------------------------------------------------
function opposite(number) {
  return(-number);
}
let number =(-14);
console.log(opposite(number))
console.log(opposite(-15))
console.log(opposite(12))
//---------------------------------------------------------------
function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}
let value1 = 20;
let value2 = 30;
let operation =["+"];
console.log(basicOp())

 
   
