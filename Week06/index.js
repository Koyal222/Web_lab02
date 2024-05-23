// const h1 = document.getElementById("h1")
// console.log(h1)
// h1.style.color="red";
// h1.style.background="blue";


// const b1=document.getElementById("b1")
// b1.style.backgroundColor="red";

// function buttonPressed(){
//    // alert("I am the button");
//    const container =document.getElementById("container")
//     const ball = document.createElement('div')
//     ball.className="ball"
//     container.appendChild(ball)
// }
//b1.onclick= buttonPressed
const plus=document.getElementById("button1")
function buttonPressed1(){
    // alert("I am the button");
    const container =document.getElementById("container1")
     const column = document.createElement('div')
     column.className="column"
     container.appendChild(column)
     generate()
 }
 plus.onclick= buttonPressed1


changeColor= document.getElementById("changeColor")
function getRandomColor(){
    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function generate(){
const arr= document.querySelectorAll('.column')
arr.forEach(element => {
    element.style.backgroundColor=getRandomColor();
});
}
changeColor.onclick= generate
