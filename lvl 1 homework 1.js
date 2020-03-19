




// ex 1 -----------------------------------------


// function X(num){
// let  a="";
 
// for(let i=1;i<=num; i++){  
//   a =""
//   for(let j=1; j<=num; j++){
//     if((i===j) || (i+j) === (num+1) ){   
//       a+="*"
//     }else a+=" "
//   }
//   console.log(a)  
// }
// }
//  X(9)




// ex 2 -----------------------------------------


// let array= [1,2,3]

// function frq(arr){
// let  count = {};
// array.forEach(function(i) { count[i] = (count[i]||0) + 1;});

// for(let avg in count){
//   count[avg]/=arr.length
// }
// return count 
// }

// console.log(frq(array));





// ex 3 -----------------------------------------

// let array =[1,10,'hi', "2",3]

// function count(arr){
//   let numbers = 0;
//   let strings = 0;
  
//   for(let i = 0; i<arr.length; i++){
//     if (typeof(arr[i])==="number"){
//       numbers++
//     }else {strings++ }
    
 
//   }
//   return ` Numbers: ${numbers}, Strings: ${strings}`
// }





// ex 4 -----------------------------------------

// function sortWords(string){
//     let myArr = string.split('');    
//     for(let i=0; i<myArr.length; i++){
//         if(myArr[i]===","||myArr[i]==="?" || myArr[i]==="-" ){
//           myArr.splice(i,1)
//           i--
//         }
//       }
//      let myArr1=myArr.join('');
//      let myArr2= myArr1.split(' ');
// let compare = function (a,b){
//       if(a.length>b.length){
//         return 1
//       }
//       if(a.length<b.length){
//         return -1
//       }
//       if(a.length==b.length){
//         return 0
//       }
//     }   
//     let sorted = myArr2.sort(compare)
//     return sorted[sorted.length-1]
//     }
    
//     console.log(sortWords("Which would be worse - to live as a monster, or to die as a good man?"))





// ex 5 ------------------------------------- 
// let string= 'there are no two words in the english language more harmful than good job'
// let string1 ='parting your soup is not a miracle,bruce.'  


//// ստեղ parting your ն ավելի երկար ա քան up is not a m, homework ի աութփութի մեջ ոնց որ սխալ ա գրած 


// function longestSubStr(string){
//     let  str=string.toLowerCase();
//     let result = [];
//     let tmp = [];
  
//     let a=str.split('');  
      
//     for(let i= 0; i<a.length; i++){
//         if(tmp.includes(a[i]) && a[i] !== ' ') {
//             tmp= [...tmp.slice(tmp.findIndex(y => y === a[i]) +1)]
//         }
          
//         tmp.push(a[i])
    
//         let tmpSymbolCount = 0
//         for (let j in tmp) {
//              if(tmp[j] !== ' ') {
//                 tmpSymbolCount += 1
//              }
//          }


//         let resultSymbolCount = 0

//         for (let k in result) {
//             if (result[k] !== ' ') {
//                  resultSymbolCount += 1
//             }
//          }

//          if (tmpSymbolCount > resultSymbolCount) {
//              result = tmp
//          }
//     }
//     return result.join('')
// }

// console.log(longestSubStr(string))
// console.log(longestSubStr(string1))






// ex 6 ------------------------------------- 

// let string = "aweyoolp"

// function compute1 (str){
//   let newStr;
//   let lastLetter1;
//   let lastLetter2;
//   let a;             
 
//   switch(str.length%3){      
//    case 2:
//    newStr = str.split('')
//    lastLetter1 = newStr.pop()
//    lastLetter2 = newStr.pop()
//    a= newStr.join("");
//       return compute(a)+lastLetter2 + lastLetter1
    

//    case 1:
//    newStr = str.split('')
//    lastLetter1 = newStr.pop()
//    a= newStr.join(""); 
//       return compute(a)+lastLetter1
    
//     default:
//       a=str
//   }
 
//   return compute(a)
 
// }

// function compute (str){

//   let count= str.length/3
//   let myArr = str.split('');
//   let firstEl;
//   let string=''
  
//    while(count>0){
  
//      firstEl = myArr.shift()
 
//      myArr.splice(2, 0, firstEl)
    
//      string+=myArr[0]+myArr[1]+myArr[2]
//      myArr.splice(0,3)
    
//     count--
//   }
  
//   return string
// }

// console.log(compute1(string))






// ex 7 ------------------------------------- 

// let array =[[2, -9, -3, 0], [1, 2], [-4, -11, 0]]
// let array1=[[3, 4], [11, 0], [5, 6, 7, 8]]
// let array2=[1, 2, 3,]

// function product (arr){
//   let max=[];
//   let mult=1;
  
//   for(let i = 0; i<arr.length; i++){
//     if(!Array.isArray(arr[i])){
//        return "Invalid numbers"
//     } 
//     mult*=check(arr[i])
    
//     for(let j=0; j<arr[i].length; j++){
      
//         if(arr[i][j]<0){
//         max.push(arr[i][j])
//         }
//      }   
//   }
//    if(max.length === 0){
//          return "No negatives"
//    } else return mult
// }

// function check(arr){  
//   let b= arr.filter((num)=> {return num < 0});
  
//   let a= b.sort((a,b)=>{return b-a});
  
//   if(a[0]===undefined){
//     return 1
//   }else return a[0]
// }

// console.log(product(array))
// console.log(product(array1))
// console.log(product(array2))





// ex 8 ------------------------------------- 


// let array= [5, 9, 23, 0, -2, -1];
// let array1=[4];
// let array2=[3,6];


// function comb(arr, n) {
    
    
//     let  i;
//     let  j; 
//     let  combs;
//     let  start;
//     let  end;
    
//     if (arr.length < 3 && arr.length>0){
//         return arr;
//     }

// 	if (n > arr.length || n <= 0) {
// 		return "Invalid combination pair number";
// 	}
	
// 	if (n == arr.length) {
// 		return [arr];
// 	}
	
	
// 	if (n == 1 ) {
// 		combs = [];
// 		for (i = 0; i < arr.length; i++) {
// 			combs.push([arr[i]]);
// 		}
// 		return combs;
// 	}

// 	combs = [];
// 	for (i = 0; i < arr.length - n + 1; i++) {
		
// 		start = arr.slice(i, i + 1);
		
// 		end = comb(arr.slice(i + 1), n - 1);
		
// 		for (j = 0; j < end.length; j++) {
// 			combs.push(start.concat(end[j]));
// 		}
// 	}
// 	return combs;
// }

// console.log(comb(array, 3))
// console.log(comb(array1, 3))
// console.log(comb(array2, 3))