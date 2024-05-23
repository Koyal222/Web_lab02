const minus= document.getElementsByClassName("minus")
const plus= document.getElementsByClassName("add")

const number = document.getElementById("number")
var digit= number.innerText
console.log(number.innerText)
number.innerText=localStorage.getItem("counter")
function minusPressed(){
    number.innerText--;
    localStorage.setItem("counter", number.innerText)
}
function plusPressed(){
    console.log("plusPressed")
    number.innerText++;
    localStorage.setItem("counter",  number.innerText)
}