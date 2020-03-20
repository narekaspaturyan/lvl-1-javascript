

let string = "NarArm"
let string1 ="NarArmk"
let string2 ="NarArmkl"
function compute (str){

  let firstEl;
  let string=''
  let a;
  let b;
  
  switch(str.length%3){
    case 1:
      a=str.slice(str.length-1)
     b= str.slice(0,str.length-1)
      break;
    case 2:
      a=str.slice(str.length-2)
     b= str.slice(0,str.length-2)
      break;
    default:
      b=str
      a="";
  }
  
  let count= b.length/3
  let myArr = b.split('');
   
  while(count>0){
  
     firstEl = myArr.shift()
 
     myArr.splice(2, 0, firstEl)
    
     string+=myArr[0]+myArr[1]+myArr[2]
     myArr.splice(0,3)
    
     count--
    }
  
  return string+a
}

console.log(compute(string))
console.log(compute(string1))
console.log(compute(string2))