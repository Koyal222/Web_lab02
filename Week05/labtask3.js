
function customFilter(array){
    var arr=[]
    for (var i = 0; i < array.length; i++) {
        // Call the callback function for each element and push the result to the new array
        if(array[i]%2==0){
        newArray.push(callback(array[i], i, array));
        }
    }
        return newArray; // Return the new arra

}
var numbers = [1, 2, 3, 4, 5];
// Using the custom map function
var doubledNumbers = customFilter(numbers) {
return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4,