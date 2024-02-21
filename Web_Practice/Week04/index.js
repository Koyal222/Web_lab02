console.log("Hey there")
console.error("0123")
console.warn("warning")
let a=1;
let b=2;
console.log(a)
var colors = ["red", "green", "blue"]
for(var i=0; i<3; i++){
    console.log(colors[i]);
}
let my_obj={
    name:"Koyal",
    cms: "021-21-0028",
    address :{
        street_no:4,
        city:"Jacobabad"
    }
}
// console.log(my_obj['name'])
// console.log(Object.keys(my_obj))
// const keys=Object.keys(my_obj)
// for(i=0; i<keys.length; i++){
//     console.log(my_obj[keys[i]])
// }

for(item in my_obj){
    console.log(item)
}

numbers=[1,2,3,4,5] 
numbers.push(6)
numbers.shift()
numbers.unshift(1)
y=numbers.slice(1,3)
numbers.splice(1,3, 8,7,9)
console.log(numbers.includes(8))
console.log(numbers)
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
}
Object.freeze(person)
//console.log(Object.entries(person))
source={
    name:"koyal",
    semester:7
}
//const r_obj= Object.assign(person,source)
//console.log(person)
console.log(Object.getOwnPropertyNames(person))
person.age=40
console.log(person)

const greet = (name) => {
    return 'Hello, ' + name + '!';
    };
    console.log(greet("koyal"))

 function double_the_Fun(arr, a){
    numbers=[]
    for(var i=0; i<arr.length; i++){
        numbers[i]=a*arr[i]

    }

    return numbers
}
num1=[1,2,3,4,5,6,7,8,9,10]
console.log(double_the_Fun(num1, 3))