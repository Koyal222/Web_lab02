// const arr= [10000, 9000, 20000, 25000, 100000]

// function myFunc(currentValue, index, arr){
//     if(index <= 1){
//         return currentValue+currentValue*10/100;
//     }
//     else if(index <= 3){
//         return currentValue+currentValue*8/100;
//     }
//     else{
//         return currentValue+currentValue*5/100;
//     }

// }

// let numbers= arr.map(myFunc)
// console.log(numbers)

// hello = val => { return "Hello"+ val}
// console.log(hello(3))

// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print : function() {
//       function print2() {
//         console.log(this)
//       }
      
//       print2()
//     }
//   }
  
//   obj.print()
let sum=0;

const numbers=[1,2,3,4,5,6,7,8,9,10];
let arr= numbers.filter(myFunction)
console.log(arr)
function myFunction(item){
    return(item>=5)

}