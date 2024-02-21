arr=[1,2,3,4,5,6,7,8,9,10]
var show= arr.map(function(item){
    console.log(item)
return item;
})
console.log(show)
//var result= arr.filter(function(item){
    
//       return (item%2)
//})
// console.log(result)
/*
string_arr=["koyal", "sonia", "prena", "Muskan","shiwani"]
console.log(string_arr.filter(item => item.includes('s')))
*/
console.log([1,2,3,4,5,6,7].reduce((total,item) => {
    return total+item;
}))


