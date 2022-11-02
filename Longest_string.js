<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    let input_string="hi dhivya"
//1 approach
// 1)Get the input
// 2)create the function to find longest string
// 3)split the string 
// 4)Declare the empty array
// 5)consider the first index of array is largest length
// 6)Run the for loop
// 7)Compare the length
// 8)If the length is greater than consider one push the element into the empty array and change the largest length
// 9)print the last element of the array


// function longestWord(input){
// let words = input.split(" ");
// var long_word = 0;
//  var arr=[];
// for(var i = 0; i < words.length; i++){
//    if(long_word < words[i].length){
//        long_word = words[i].length;
//        arr.push(words[i]);
//    }
// }
// return arr[arr.length-1]
// }
// console.log(longestWord(input_string));

//2 approach
//get the input
//create a function 
//split the string
//using sort function sort the array
//print the last index

// function longestWord(input){
// let words = input.split(" ");
// let result=words.sort(function(a,b){
//     return a.length-b.length;
// })
// return result[result.length-1]
// }
// console.log(longestWord(input_string));


//3 approach
function longestWord(input){
let result=input.split(" ").sort((a,b)=>a.length-b.length);
return result[result.length-1]
}
console.log(longestWord(input_string));
</script>
</html>